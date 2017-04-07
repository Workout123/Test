class AngcallController < ApplicationController
  def generateFunc
    #require 'json'
    num=getNumber
    file = File.read('public/city.json')
    data_hash = JSON.parse(file)
    print "data_hash"
    render plain: data_hash["cities"][num]["city"]
    #return num
  end

  private
    def getNumber
      return rand(6)
    end

end
