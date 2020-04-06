# MongoDB 활용
## 설치
### MongoDB 설치하기
1. monggodb.com 에서 최신버전의 몽고디비를 다운로드 후 설치한다.
2. 설치 후 환경변수에 path를 설정한다. (윈도우: C:\Program Files\MongoDB\Server\4.2\bin)
3. mongodb 데몬(백그라운드 프로그램)을 띄운다.
```bash
mongod --port 15000 --dbpath=c:/MonggoDB/booldook
```

4. 또 다른 터미널을 열고 아래와 같이 mongo shell(cli)을 띄운다.
```bash
mongo --port 15000
```

5. 작업할 데이터베이스로 이동한다.
```bash
# 데이터베이스들을 보는 명령
show dbs

# 데이터베이스 선택 (없으면 생성됨)
use sample

# Collection 생성
db.createCollection("users");

# 현재 데이터베이스의 모든 collection 보기
show collections

# 데이터 입력
db.users.insertOne({
	name: "홍길동",
	age: 25
});
 db.user.insertMany([
	{name:"홍길순", age: 25},
	{name:"홍길만", age: 28, gender:"M"},
]);

# 데이터 가져오기
db.users.findOne({
	name: "홍길동"
});
db.users.find();

# 데이터 삭제하기
db.user.deleteOne({
	name: "홍길동"
});

# 데이터 수정하기
db.user.updateOne({
	name: "홍길순"
}, {
	$set: {name:"별주부", age: 60}
});
```