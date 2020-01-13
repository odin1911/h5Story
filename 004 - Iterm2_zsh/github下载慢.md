查ip
https://www.ipaddress.com/

改hosts:
219.76.4.4 github-cloud.s3.amazonaws.com
192.30.253.112 github.com
151.101.185.194 github.global.ssl.fastly.net

sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder