FROM php:7.2-apache

COPY . /var/www/html
WORKDIR /var/www/html

RUN docker-php-ext-install mysqli
#CMD [ "php", "./functions.php" ]