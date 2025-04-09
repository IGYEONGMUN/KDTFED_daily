// 스타일컴포넌트를 위해서 무언가를 선언하겠다는 파일
import "styled-components";

// 디폴트테마 타입선언
declare module "styled-components" {
  export const theme: DefaultTheme = {
    bgColor: "string",
    textColor: "string",
    accentColor: "string",
  };
}
