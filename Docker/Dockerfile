# Sử dụng image Node.js 20 chính thức
FROM node:20-alpine

# Tạo thư mục app trong container
WORKDIR /app

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Cài đặt các dependency
RUN npm install

# Expose port (tuỳ thuộc vào ứng dụng, thường là 3000)
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["node", "index.js"]