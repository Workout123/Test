require 'digest/md5'
require 'net/http'
require 'uri'

#hash is composed by taking the first and the last 64kb of the video file, putting all together and generating a md5 of the resulting data (128kb).
def get_hash(name)
	readsize = 64 * 1024
	File.open(name, 'rb') do |f|
		size = File.size?(name)
		data = f.read(readsize)
		f.seek(-readsize, IO::SEEK_END)
		data += f.read(readsize)
		return Digest::MD5.hexdigest(data)
  	end
end


def getAllVideoFileNames(path)
	videoFiles = []
	begin 
		Dir.new(path.to_s).each do |file|
			if file.end_with?(".mp4", ".mkv", ".mpg", "3gp", "flv")
				videoFiles.push(file)
			end
		end
	rescue Exception => e
		puts e.message
		exit
	end

	return videoFiles
end


# SubDB/1.0 (Name/Version; Github repo)
def downloadSubs(hashValue)
	header = { 'User-Agent' => 'SubDB/1.0 (Nameless-Downloader /0.0; https://github.com/Workout123/Test)' }

	http = Net::HTTP.new "api.thesubdb.com"
	res = http.send_request("GET", "/?action=download&hash=" + hashValue + "&language=en", nil, header)

	return res.code == "200"? res.body : nil;
end


def writeToFile(file_name, subs)
	actual_name = file_name.match(/(.*)\.\w{3,4}/).captures
	File.open(actual_name.to_s+'.srt', 'w') {|f| f.write(subs) }
end


def getSubsForFolder(path)
	puts "Searching for video files under " + path
	video_files_in_folder = getAllVideoFileNames(path)
	num_of_video_files = video_files_in_folder.length
	puts "Number of video files found: " + num_of_video_files.to_s
	success = 0

	video_files_in_folder.each do |file|
		full_path = path+file
		subs = downloadSubs(get_hash(full_path))
		if(subs)
			writeToFile(full_path, subs)
			puts "(+) " + file ;
			success += 1
		else
			puts "(-) " + file
		end
	end
	puts "Success rate: " + (success * 100 / num_of_video_files).to_s unless num_of_video_files == 0
end

path = ARGV[0]? ARGV[0] : Dir.pwd
path = path + "/" unless path.end_with?"/"
getSubsForFolder(path)