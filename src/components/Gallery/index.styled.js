import styled from "styled-components";
import breakpoint from "../../packages/breakpoints";
import { Poster, Posters } from "./Poster";

export default {
  Gallery: styled.div`
    margin: 0 auto;
    padding: 0;
    border: 0;
    font-size: 100%;
    text-align: center;
  `,
  GalleryContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    pointer-events: none;
    &:hover > div > div > div {
      background: rgba(0, 0, 0, 0.35);
    }
    &:hover > div > div > div:hover {
      background: transparent;
    }
    ${breakpoint("tablet", "up")} {
      display: block;
      p {
        margin: 0;
        padding: 0;
      }
      p:nth-of-type(13n + 1),
      p:nth-of-type(13n + 3),
      p:nth-of-type(13n + 4),
      p:nth-of-type(13n + 6),
      p:nth-of-type(13n + 8),
      p:nth-of-type(13n + 10),
      p:nth-of-type(13n + 11) {
        display: none;
      }
    }
  `,
  GalleryThumb: styled.div`
    width: 50%;
    margin: 0;
    height: auto;
    display: inline-block;
    position: relative;
    vertical-align: top;
    z-index: 1;
    overflow: visible;
    pointer-events: auto;
    cursor: pointer;
    &:hover img {
      transform: scale(1.1);
    }
    ${breakpoint("tablet", "up")} {
      display: inline-block;
      position: relative;
      margin: 10px;
      vertical-align: top;
      z-index: 1;
      &:nth-of-type(13n + 1) {
        width: calc(100vw * 0.15);
        margin-left: -15px;
      }
      &:nth-of-type(13n + 2) {
        width: calc(100vw * 0.3);
      }
      &:nth-of-type(13n + 3) {
        z-index: 4;
        width: calc(100vw * 0.3);
        height: calc(100vw * 3 / 4 * 0.15);
        & > div {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
      &:nth-of-type(13n + 4) {
        width: calc(100vw * 0.15);
      }
      &:nth-of-type(13n + 5) {
        z-index: 6;
        width: calc(100vw * 0.3);
      }
      &:nth-of-type(13n + 6) {
        z-index: 2;
        width: calc(100vw * 0.3);
        height: calc(100vw * 3 / 4 * 0.15);
        margin-left: 30px;
        & > div {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
      &:nth-of-type(13n + 7) {
        width: calc(100vw * 0.15);
      }
      &:nth-of-type(13n + 8) {
        width: calc(100vw * 0.15);
        margin-left: -15px;
      }
      &:nth-of-type(13n + 9) {
        width: calc(100vw * 0.3);
      }
      &:nth-of-type(13n + 10) {
        z-index: 4;
        width: calc(100vw * 0.3);
        height: calc(100vw * 3 / 4 * 0.15);
        & > div {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
      &:nth-of-type(13n + 11) {
        width: calc(100vw * 0.15);
      }
      &:nth-of-type(13n + 12) {
        z-index: 6;
        width: calc(100vw * 0.3);
      }
      &:nth-of-type(13n + 13) {
        z-index: 2;
        margin-left: 0;
        margin-right: 15.5%;
        width: calc(100vw * 0.3);
        height: calc(100vw * 3 / 4 * 0.15);
        & > div {
          position: absolute;
          bottom: 0;
          right: 0;
        }
			}
			button {
				display: block;
				transition: all 0.4s;
				width: 60px;
				height: 60px;
				background-color: transparent;
				pointer-events: auto;
				cursor: pointer;
				position: absolute;
				bottom: 50%;
				transform: translateY(50%);
			}
    }

  `,
  ThumbOrigin: styled.div`
    overflow: hidden;
  `,
  ThumbnailImage: styled.img`
    max-width: 100%;
    width: 100%;
    display: block;
    transition: transform 0.25s ease;
  `,
  HasPlayButton: styled.span`
    width: 45px;
    height: 45px;
    background-image: url(//www.lexus.com/concept/shared/img/ui/play_btn.png);
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    opacity: 0.5;
    display: block;
    cursor: pointer;
    ${breakpoint("tablet", "up")} {
      width: 80px;
      height: 80px;
    }
  `,
  ThumbnailOverlay: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 2;
    transition: all 0.25s ease;
  `,
  ThumbLineBreak: styled.p`
    margin: 0;
    padding: 0;
  `
};