from bs4 import BeautifulSoup
import re
def find_address(filename):
    regex = r"(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"
    #opening the file
    HTMLFile = open(filename,"r")
    # reading file
    index = HTMLFile.read()
    content = BeautifulSoup(index,'html.parser')
    text = str(content)
    allURLs = re.findall(regex,text)
    #find google links
    predefined_links = ['google.com/maps', 'maps.google.com', 'map.google.com']
    map_links = []
    for url in allURLs:
        if any(defined_links in url for defined_links in predefined_links) and 'https://www.google.com/maps/vt' not in url:
            if(url[-2:] == ",=" or url[-2:] == "='"):
                map_links.append(url.replace('&amp;', '&')[:-2])
            else:
                map_links.append(url.replace('&amp;','&'))

    for map_link in map_links:
        if(('embed' in map_link) and (('q=' in map_link) or ('pb=!' in map_link))):
            if 'q=' in map_link:
                print(map_link.split('q=')[1].split('&')[0].replace('%20', ' ').replace('+', ' ').replace('%2C', ' '))
            else:
                temp = map_link.split('!2d')[1].split('!3d')
                longitude = temp[0]
                latitude = temp[1].split('!')[0]
                print(latitude , longitude)
        elif 'https://maps.google.com/maps?11=3D' in map_link:
            try:
                if len(map_link.split('https://maps.google.com/maps?11=3D')[1].split(',')) == 2:
                    temp = map_link.split('?ll')[1].split(',')
                    latitude = temp[0][3:]
                    longitude = temp[1].split('&')[0]
                    print(latitude , longitude)
                continue
            except:
                continue
        elif 'google.com/maps/@' in map_link:
            try:
                map_link = map_link.split('@')[1]
                temp = map_link.split(',')
                latitude = temp[0]
                longitude = temp[1]
                print(latitude , longitude)
            except:
                continue
        continue



path = [
    "C:\\Users\\lkaushik\\Downloads\\Downing Farm - Peebles Homes _ New Homes in Dayton.mhtml", #0
    "C:\\Users\\lkaushik\\Downloads\\Contact Us - Metro Home Builders, Inc.mhtml", #1
    "C:\\Users\\lkaushik\\Downloads\\Contact Greg Alford of Alford Homes Dallas.mhtml", #2
    "C:\\Users\\lkaushik\\Downloads\\Contact Us _ NJ Home Builder.mhtml", #3
    "C:\\Users\\lkaushik\\Downloads\\Contact Us - Equipped to help with your new home - New Energy Homes.mhtml", #4
    "C:\\Users\\lkaushik\\Downloads\\Ranch Country Homes - Welcome!.mhtml", #5
    "C:\\Users\\lkaushik\\Downloads\\New Homes in Dallas, TX _ 572 Communities.mhtml", #6
    "C:\\Users\\lkaushik\\Downloads\\Contact Us - Affordable Homes Super Center.mhtml", #7
    "C:\\Users\\lkaushik\\Downloads\\Contact 1ST Choice Realty, Willard Missouri.mhtml", #8
]

find_address(path[0])