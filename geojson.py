

from bs4 import BeautifulSoup
import re


def find_map_links(filename):
    with open(filename) as file:
        soup = BeautifulSoup(file, 'html.parser')
    
    all_links = find_all_links(str(soup))
    
    predefined_links = ['google.com/maps', 'maps.google.com', 'map.google.com']
    
    map_links = []
    
    for link in all_links:
        if any(defined_links in link for defined_links in predefined_links) and 'https://www.google.com/maps/vt' not in link:
            if(link[-2:] == ',=' or link[-2:] == "='"):
                map_links.append(link.replace('&amp;', '&')[:-2])
            else:
                map_links.append(link.replace('&amp;', '&'))
    return check_links(map_links)
    #return map_links

def check_links(urls):
    for url in urls:
        if 'embed' in url:
            if 'q=' in url:
                return return_embed_address(url)
            elif 'pb=!' in url:
                return return_long_lat_embed(url)
        elif 'maps?ll' in url:
          return return_long_lat(url)

def return_long_lat_embed(url):
    temp = url.split('!2d')[1].split('!3d')
    longitude = temp[0]
    latitude = temp[1].split('!')[0]
    
    return latitude, longitude

def return_long_lat(url):
    if url.split('?ll')[1] == '':
        return 0
    elif len(url.split('?ll')[1].split(',')) == 1:
        return 0
    else:
        temp = url.split('?ll')[1].split(',')
        latitude = temp[0][3:]
        longitude = temp[1]
    
    return latitude, longitude

def return_embed_address(url):
    return url.split('q=')[1].split('&')[0].replace('%20',' ').replace('+', ' ').replace('%2C', ',')

def find_all_links(file):
    links = list(set(re.findall("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})", file)))
    return links
            
            
test = find_map_links('html-files//Contact Greg Alford of Alford Homes Dallas.html')
print(test) 
