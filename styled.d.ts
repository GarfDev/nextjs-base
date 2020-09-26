import "styled-components";

declare module "styled-components" {
  declare interface DefaultTheme {
    borderRadius?: string;
    backgroundColor?: string;
    borderColor?: string;
    hoverColor?: string;
    color?: string;
  }
}
