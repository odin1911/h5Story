创建公钥,可以使用openssl工具创建私钥
openssl genrsa -out privatekey.pem 1024

创建证书签名请求(Certificate Signing Request)文件
openssl req -new -key privatekey.pem -out certrequest.csr

获取证书,证书应该是一个经过证书授权中心签名的文件,该证书文件内宝蓝了服务器端提供的公钥以及证书的颁发机构等信息
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
openssl x509 -req -days 3650 -in certrequest.csr -signkey privatekey.pem -out certificate.pem


openssl x509 -req -days 3650 -in certrequest.csr_ -signkey privatekey.pem_ -out certificate.pem



openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem