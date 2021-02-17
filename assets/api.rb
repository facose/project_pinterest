require "uri"
require "net/http"
require "json"


def request(url, token = nil)
    url = URI(url)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    request = Net::HTTP::Get.new(url)
    response = http.request(request)
    return JSON.parse(response.read_body)
end 

def build_web_page(info_array)
    File.open('images.html', 'w') do |file|
        info_array.each do |element|
            file.puts "<img src='#{element["images"]["main"]}' alt='#{element["name"]["spanish"]}' class='image'>" 
        end
    end          
end 


response_array = request("https://aves.ninjas.cl/api/birds")
build_web_page(response_array)