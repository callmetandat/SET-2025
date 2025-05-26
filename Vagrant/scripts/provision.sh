#!/bin/bash

sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Ghi nội dung khác nhau cho mỗi VM
echo "<h1>Hello from $(hostname)</h1>" | sudo tee /var/www/html/index.html