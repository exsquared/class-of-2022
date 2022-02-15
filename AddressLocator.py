from bs4 import BeautifulSoup
import re

path1=r"C:\Users\lsingh\Desktop\Webpages\Downing Farm - Peebles Homes _ New Homes in Dayton.mhtml"
path2=r"C:\Users\lsingh\Desktop\Webpages\Contact Us - Metro Home Builders, Inc.mhtml"
path3=r"C:\Users\lsingh\Desktop\Webpages\Contact 1ST Choice Realty, Willard Missouri.mhtml"
path4=r"C:\Users\lsingh\Desktop\Webpages\Contact Us - Affordable Homes Super Center.mhtml"
path5=r"C:\Users\lsingh\Desktop\Webpages\Contact Greg Alford of Alford Homes Dallas.mhtml"
path6=r"C:\Users\lsingh\Desktop\Webpages\Contact Us _ NJ Home Builder.mhtml"
path7=r"C:\Users\lsingh\Desktop\Webpages\Contact Us - Equipped to help with your new home - New Energy Homes.mhtml"
path8=r"C:\Users\lsingh\Desktop\Webpages\Ranch Country Homes - Welcome!.mhtml"

def readFile(path):
    with open(path) as file:
        soup = BeautifulSoup(file, "html.parser")
        return soup.prettify()
#         return str(soup)

def extractLinks(string):
    regex ="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
    all_links = list(set(re.findall(regex, string)))
    return all_links

 

def extractMapLinks(all_URLs):
    required_keywords_in_URLs = ["google.com/maps", "maps.google.com", "map.google.com"]
    map_links = []

    for link in all_URLs:
        for keyword in required_keywords_in_URLs:
            if keyword in link and "https://www.google.com/maps/vt" not in link:
                if(link[-2:] == ",=" or link[-2:] == "='"):
                    map_links.append(link.replace("&amp;", "&")[:-2])
                else:
                    map_links.append(link.replace("&amp;", "&"))
    return map_links

def extractAddressFromMapLinks(urls):
    for url in urls:
        if "embed" in url:
            if "q" in url:
                address = url.split("q=")[1].split("&")[0].replace("%20", " ").replace("+", " ").replace("%2C", ",").replace("%7C", "|")
                return address

            string = url.split("!2d")[1]
            long = string.split("!3d")[0]
            lat = string.split("!3d")[1].split("!2m")[0]
            address = long + ", " + lat
            return address

        elif("ll" in url and "3D" in url):
            string = url.split("3D")[1]
            temp_list = string.split(",")
            if(len(temp_list) == 2):
                address = temp_list[0] + ", " + temp_list[1]
                return address       
      
        elif("@" in url):
            temp_string = url.split("@")[1].split(',')
            address = temp_string[0] + ", " + temp_string[1]
            return address   

all_URLs = extractLinks(readFile(path1))
map_URLs = extractMapLinks(all_URLs)
address = extractAddressFromMapLinks(map_URLs)

print (address)
