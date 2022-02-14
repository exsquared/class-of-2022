from asyncore import read
from bs4 import BeautifulSoup as bs
import re
import glob

prefix_map_urls = ['google.com/maps', 
                    'maps.google.com', 
                    'map.google.com']

data = glob.glob("./data//*.mhtml")

def readFiles():
    html_content = []
    for path in data:
        with open(path) as file:
            content = str(bs(file, 'html.parser'))
            html_content.append(content)
    return html_content

def getAllUrlsFromParsedHtml(html_content):
    all_urls_from_parsed_html = []
    for content in html_content:
        content = content.replace('\n', ',')
        urls = list(set(re.findall("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})", content)))
        all_urls_from_parsed_html.append(urls)
    return all_urls_from_parsed_html


def getMapUrlsFromAllUrls(all_urls):
    map_urls = []
    for current_webpage_urls in all_urls:
        map_url = []
        for url in current_webpage_urls:
            for prefix_map_url in prefix_map_urls:
                if (prefix_map_url in url):
                    map_url.append(url)    
        map_urls.append(map_url)
    return map_urls

def getMarkerUrls(map_urls):
    urls = []
    for webpage_urls in map_urls:
        marker_url = ""
        for url in webpage_urls:
            if (len(url) > len(marker_url)):
                marker_url = url
        urls.append(marker_url)
    return urls

def extractLocationFromURL(url):
    if('current+location/' in url):
        location = url.split('current+location/')[1].replace('%20', '')
        if ('=' in location):
            location = location.split('=')[0]
        return location

    if ('/@' in url):
        lat_long = url.split('/@')[1].split(',')
        return(lat_long[0] + " " + lat_long[1])
    if ('embed' in url):
        if ('pb=!' in url):
            location = url.split('!2d')[1].split('!3d')
            long = location[0]
            lat = location[1].split('!')[0]
            return long + " " + lat
        elif ('q=' in url):
            location = url.split('q=')[1].split('&')[0].replace('%20',' ').replace('+', ' ').replace('%2C', ',').replace('%7C', '|').split(',,')[0]
            return location
    if ('ll=' in url):
        location = url.split('ll=')[1].replace('3D', '').replace('2D','').split(',')
        lat = location[0]
        long = location[1]
        if ('=' in long):
            long = long.split('=')[0]
        return lat + " " + long

html_content = readFiles()
all_urls_from_parsed_html = getAllUrlsFromParsedHtml(html_content)
map_urls = getMapUrlsFromAllUrls(all_urls_from_parsed_html)
marker_urls = getMarkerUrls(map_urls)



locations = []

for url in marker_urls:
    extracted_location = extractLocationFromURL(url)
    locations.append(extracted_location)

print(locations)        



