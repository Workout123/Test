class DataController < ApplicationController
	# include ActionController::RespondWith


	# respond_to :html,:json

	def givedata(id)
  			json = File.read('public/city/citylist.json')
			obj = JSON.parse(json)
			return obj['city'][id]["value"]
    end

    def create_random
    	json = File.read('public/city/citylist.json')
		obj = JSON.parse(json)
		total=obj['city'].count
    	@dta=givedata(rand(total))
    	print "hi darshu";
    	# print "in function : "

    	# render :json=>{:response => @dta.to_json}
    	render plain: @dta 
    	# respond_to do |format|      
     # 		format.json  { render :json => @dta }
    	#  end
    end
end
