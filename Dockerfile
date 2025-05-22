# 1. Node 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉토리 생성
WORKDIR /app

# 3. 의존성 복사 및 설치
COPY package.json package-lock.json* ./
RUN npm install

# 4. 소스 복사
COPY . .

# 5. Next.js 빌드
RUN npm run build

# 6. 3333 포트로 실행
EXPOSE 3333

# 7. Next.js 시작 (포트 지정)
CMD ["npm", "start", "--", "-p", "3333"]
