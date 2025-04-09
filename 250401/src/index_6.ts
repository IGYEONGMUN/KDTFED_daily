interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "글제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "ddd",
    age: 20,
  },
};

// indexed access 타입
// post["author"]; 이런식으로 객체안의 값을 찾아오는 방식
// const authorKey = "author"이렇게 하고 대괄호 안에 authorKey 넣는 방식 안됨

const printAuthor = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name}`);
};

// 인터페이스는 객체만을 위한 , 타입별칭은 여러가지 가능함
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 메모리누수 최소화하기위한목적 - tuple
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
