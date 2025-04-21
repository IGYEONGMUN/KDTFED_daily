import "styled-components";

declare module "styled-components" {
  // 내장되어 있는 내부요소DefaultTheme
  // 여기서 타입정의
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
  }
}
