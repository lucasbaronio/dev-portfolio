import Jenkins from '../../assets/jenkins.png';
import Notion from '../../assets/notion.ico';
import Slack from '../../assets/slack.png';
import Jira from '../../assets/jira.png';
import Figma from '../../assets/figma.png';

export const STACKS = {
  javascript: {
    component: ({ className }) => (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
        <rect width="630" height="630" fill="#f7df1e" />
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
      </svg>
    ),
    colors: {
      text: 'text-yellow-200',
    },
  },
  html: {
    component: ({ className }) => (
      <svg viewBox="0 0 128 128" width="100%">
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        ></path>
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        ></path>
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        ></path>
      </svg>
    ),
    colors: {
      text: 'text-[#e44d26]',
    },
  },
  css: {
    component: ({ className }) => (
      <svg viewBox="0 0 128 128" width="100%">
        <path
          fill="#1572B6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
        ></path>
        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
        ></path>
        <path
          fill="#fff"
          d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
        ></path>
        <path
          fill="#EBEBEB"
          d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
        ></path>
      </svg>
    ),
    colors: {
      text: 'text-[#1772b6]',
    },
  },
  react: {
    component: ({ className }) => (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        <g fill="#61DAFB">
          <circle cx="64" cy="64" r="11.4"></circle>
          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
      </svg>
    ),
    colors: {
      text: 'text-blue-200',
    },
  },
  astro: {
    component: ({ className }) => (
      <svg width="100%" viewBox="0 0 1280 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M815.039 94.6439C824.758 106.709 829.714 122.99 839.626 155.553L1056.17 866.901C976.107 825.368 889.072 795.413 797.281 779.252L656.29 302.798C653.983 295.002 646.822 289.654 638.693 289.654C630.542 289.654 623.368 295.03 621.08 302.853L481.795 779.011C389.579 795.1 302.146 825.109 221.741 866.793L439.347 155.388L439.348 155.388C449.291 122.882 454.262 106.629 463.982 94.5853C472.562 83.9531 483.723 75.6958 496.4 70.6002C510.76 64.8284 527.756 64.8284 561.749 64.8284H717.174C751.212 64.8284 768.23 64.8284 782.603 70.6123C795.292 75.7184 806.459 83.9923 815.039 94.6439Z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
          fill="#FF5D01"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M840.951 900.754C805.253 931.279 734.002 952.097 651.929 952.097C551.197 952.097 466.767 920.737 444.363 878.561C436.354 902.732 434.558 930.396 434.558 948.068C434.558 948.068 429.281 1034.84 489.636 1095.2C489.636 1063.86 515.042 1038.46 546.381 1038.46C600.097 1038.46 600.036 1085.32 599.987 1123.34C599.986 1124.48 599.984 1125.61 599.984 1126.73C599.984 1184.44 635.255 1233.91 685.416 1254.77C677.924 1239.36 673.721 1222.05 673.721 1203.77C673.721 1148.73 706.034 1128.23 743.588 1104.41L743.588 1104.41C773.469 1085.46 806.668 1064.41 829.548 1022.17C841.486 1000.13 848.265 974.893 848.265 948.068C848.265 931.573 845.702 915.676 840.951 900.754Z"
          fill="url(#paint1_linear_709_110)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_709_110"
            x1="882.997"
            y1="27.1132"
            x2="638.955"
            y2="866.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#000014" />
            <stop offset="1" stopColor="#150426" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_709_110"
            x1="1001.68"
            y1="652.45"
            x2="790.326"
            y2="1094.91"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF1639" />
            <stop offset="1" stopColor="#FF1639" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    colors: {
      text: 'text-red-500',
    },
  },
  node: {
    component: ({ className }) => (
      <svg width="100%" viewBox="0 0 128 128">
        <path
          fill="#83CD29"
          d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
        ></path>
      </svg>
    ),
    colors: {
      text: 'text-[#83CD29]',
    },
  },
  nextjs: {
    component: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="394"
        height="80"
        fill="none"
        viewBox="0 0 394 80"
      >
        <path
          fill="#fff"
          d="M261.919.0330722h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791V.0330722ZM149.052.0330722V12.7H94.0421v20.3772h44.2389v12.6669H94.0421v20.928h55.0099V79.339H80.43V12.7h-.0057V.0330722h68.6277ZM183.32.0661486h-17.814L229.312 79.3721h17.866l-31.907-39.6257L247.127.126654l-17.815.02753-22.96 28.515516L183.32.0661486ZM201.6 56.7148l-8.921-11.0919-27.224 33.8097h17.865l18.28-22.7178Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M80.907 79.339 17.0151 0H0v79.3059h13.6121V16.9516L63.8067 79.339H80.907Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M333.607 78.8546c-.997 0-1.845-.3453-2.555-1.036-.71-.6907-1.061-1.5269-1.052-2.5175-.009-.9634.342-1.7905 1.052-2.4812.71-.6907 1.558-1.0361 2.555-1.0361.959 0 1.798.3454 2.508 1.0361.72.6907 1.079 1.5178 1.089 2.4812-.01.6543-.176 1.2541-.508 1.7903-.341.5454-.774.9726-1.319 1.2816-.535.3181-1.125.4816-1.77.4816ZM356.84 45.4453h6.032v23.2393c-.009 2.1358-.471 3.9626-1.374 5.4986-.913 1.5359-2.177 2.7082-3.8 3.5353-1.614.8179-3.505 1.2361-5.654 1.2361-1.965 0-3.726-.3545-5.294-1.0452-1.568-.6907-2.813-1.7268-3.726-3.0901-.923-1.3633-1.375-3.0628-1.375-5.0986h6.042c.009.8907.212 1.6631.599 2.3084.387.6453.922 1.136 1.605 1.4814.691.3454 1.485.5181 2.379.5181.969 0 1.799-.2 2.472-.609.673-.3999 1.19-.9997 1.55-1.7995.35-.7906.535-1.7722.544-2.9355V45.4453ZM387.691 54.5338c-.147-1.4087-.793-2.5084-1.918-3.29-1.135-.7907-2.601-1.1815-4.4-1.1815-1.263 0-2.351.1909-3.255.5635-.904.3817-1.605.8906-2.085 1.5359-.479.6453-.719 1.3815-.738 2.2086 0 .6907.166 1.2905.489 1.7904.323.5089.756.9361 1.319 1.2815.553.3544 1.171.6452 1.845.8815.682.2363 1.365.4363 2.047.5999l3.145.7725c1.264.2908 2.491.6817 3.662 1.1815 1.171.4908 2.232 1.1179 3.163 1.8722.932.7544 1.67 1.6632 2.214 2.7266.544 1.0633.821 2.3084.821 3.7444 0 1.9358-.498 3.6354-1.504 5.1077-1.005 1.4632-2.453 2.6084-4.353 3.4355-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.3998-6.779-1.1996-1.918-.7907-3.413-1.9541-4.492-3.481-1.079-1.5268-1.66-3.39-1.743-5.5803h5.977c.083 1.1451.452 2.0995 1.079 2.872.636.7634 1.466 1.3269 2.481 1.7086 1.024.3726 2.167.5635 3.431.5635 1.319 0 2.481-.2 3.486-.5908.996-.3908 1.78-.936 2.343-1.6449.572-.6999.858-1.5269.867-2.4721-.009-.8634-.268-1.5815-.766-2.145-.507-.5634-1.208-1.036-2.103-1.4177-.903-.3817-1.955-.7271-3.154-1.027l-3.818-.9634c-2.758-.6998-4.944-1.7631-6.54-3.19-1.604-1.4269-2.398-3.3173-2.398-5.6894 0-1.9449.535-3.6535 1.615-5.1168 1.069-1.4632 2.536-2.5993 4.39-3.4082C377.011 45.4 379.114 45 381.456 45c2.38 0 4.464.4 6.263 1.2179 1.798.8089 3.21 1.9359 4.233 3.3718 1.024 1.436 1.559 3.081 1.587 4.9441h-5.848Z"
        />
      </svg>
    ),
    colors: {
      text: 'text-[#0077ff]',
    },
  },
  vite: {
    component: ({ className }) => (
      <svg
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 256 257"
      >
        <defs>
          <linearGradient
            id="IconifyId181a1aae180e65c622682"
            x1="-.828%"
            x2="57.636%"
            y1="7.652%"
            y2="78.411%"
          >
            <stop offset="0%" stopColor="#41D1FF"></stop>
            <stop offset="100%" stopColor="#BD34FE"></stop>
          </linearGradient>
          <linearGradient
            id="IconifyId181a1aae180e65c622683"
            x1="43.376%"
            x2="50.316%"
            y1="2.242%"
            y2="89.03%"
          >
            <stop offset="0%" stopColor="#FFEA83"></stop>
            <stop offset="8.333%" stopColor="#FFDD35"></stop>
            <stop offset="100%" stopColor="#FFA800"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#IconifyId181a1aae180e65c622682)"
          d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
        ></path>
        <path
          fill="url(#IconifyId181a1aae180e65c622683)"
          d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
        ></path>
      </svg>
    ),
    colors: {
      text: 'text-[#be34fe]',
    },
  },
  golang: {
    component: ({ className }) => (
      <svg className={className} viewBox="16.8 16.1 72.9 27.6">
        <switch>
          <g fill="#00acd7">
            <path d="m22.3 24.7c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h12.6c.1 0 .2.1.1.2l-.6.9c-.1.1-.2.2-.4.2zm-5.3 3.2c-.1 0-.2-.1-.1-.2l.7-1c.1-.1.2-.2.4-.2h16.1c.1 0 .2.1.2.2l-.3 1c0 .1-.2.2-.3.2zm8.5 3.3c-.1 0-.2-.1-.1-.2l.5-.9c.1-.1.2-.2.4-.2h7c.1 0 .2.1.2.2l-.1.8c0 .1-.1.2-.2.2zm36.6-7.2-5.9 1.5c-.5.1-.6.2-1-.4-.5-.6-.9-1-1.7-1.3-2.2-1.1-4.4-.8-6.4.5-2.4 1.5-3.6 3.8-3.6 6.7 0 2.8 2 5.1 4.8 5.5 2.4.3 4.4-.5 6-2.3.3-.4.6-.8 1-1.3h-6.8c-.7 0-.9-.5-.7-1.1.5-1.1 1.3-2.9 1.8-3.8.1-.2.4-.6.9-.6h12.8c-.1 1-.1 1.9-.2 2.9-.4 2.5-1.3 4.9-2.9 6.9-2.5 3.3-5.8 5.4-10 6-3.5.5-6.7-.2-9.5-2.3-2.6-2-4.1-4.6-4.5-7.8-.5-3.8.7-7.3 3-10.3 2.5-3.3 5.8-5.4 9.9-6.1 3.3-.6 6.5-.2 9.3 1.7 1.9 1.2 3.2 2.9 4.1 5 .1.4 0 .5-.4.6z" />
            <path d="m73.7 43.5c-3.2-.1-6.1-1-8.6-3.1-2.1-1.8-3.4-4.1-3.8-6.8-.6-4 .5-7.5 2.9-10.6 2.6-3.4 5.7-5.1 9.9-5.9 3.6-.6 7-.3 10 1.8 2.8 1.9 4.5 4.5 5 7.9.6 4.8-.8 8.6-4 11.9-2.3 2.4-5.2 3.8-8.4 4.5-1.1.2-2.1.2-3 .3zm8.4-14.2c0-.5 0-.8-.1-1.2-.6-3.5-3.8-5.5-7.2-4.7-3.3.7-5.4 2.8-6.2 6.1-.6 2.7.7 5.5 3.2 6.7 1.9.8 3.9.7 5.7-.2 2.9-1.4 4.4-3.7 4.6-6.7z" />
          </g>
        </switch>
      </svg>
    ),
    colors: {
      text: 'text-[#2489ca]',
    },
  },
  markdown: {
    component: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        viewBox="0 0 32 32"
        className={className}
      >
        <path d="M29.693 25.849h-27.385c-1.271 0-2.307-1.036-2.307-2.307v-15.083c0-1.271 1.036-2.307 2.307-2.307h27.385c1.271 0 2.307 1.036 2.307 2.307v15.078c0 1.276-1.031 2.307-2.307 2.307zM7.693 21.229v-6l3.078 3.849 3.073-3.849v6h3.078v-10.458h-3.078l-3.073 3.849-3.078-3.849h-3.078v10.464zM28.307 16h-3.078v-5.229h-3.073v5.229h-3.078l4.615 5.385z" />
      </svg>
    ),
    colors: {
      text: 'dark:text-text-100 text-black',
    },
  },
  linux: {
    component: ({ className }) => (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          fill="#202020"
          d="M13.338 12.033c-.1-.112-.146-.319-.197-.54-.05-.22-.107-.457-.288-.61v-.001a.756.756 0 00-.223-.134c.252-.745.153-1.487-.1-2.157-.312-.823-.855-1.54-1.27-2.03-.464-.586-.918-1.142-.91-1.963.014-1.254.138-3.579-2.068-3.582-.09 0-.183.004-.28.012-2.466.198-1.812 2.803-1.849 3.675-.045.638-.174 1.14-.613 1.764-.515.613-1.24 1.604-1.584 2.637-.162.487-.24.984-.168 1.454-.023.02-.044.041-.064.063-.151.161-.263.357-.388.489-.116.116-.282.16-.464.225-.183.066-.383.162-.504.395v.001a.702.702 0 00-.077.339c0 .108.016.217.032.322.034.22.068.427.023.567-.144.395-.163.667-.061.865.102.199.31.286.547.335.473.1 1.114.075 1.619.342l.043-.082-.043.082c.54.283 1.089.383 1.526.284a.99.99 0 00.706-.552c.342-.002.717-.146 1.318-.18.408-.032.918.145 1.503.113a.806.806 0 00.068.183l.001.001c.227.455.65.662 1.1.627.45-.036.928-.301 1.315-.762l-.07-.06.07.06c.37-.448.982-.633 1.388-.878.203-.123.368-.276.38-.499.013-.222-.118-.471-.418-.805z"
        />
        <path
          fill="#F8BF11"
          d="M13.571 12.828c-.007.137-.107.24-.29.35-.368.222-1.019.414-1.434.918-.362.43-.802.665-1.19.696-.387.03-.721-.13-.919-.526v-.002c-.123-.233-.072-.6.031-.987s.251-.785.271-1.108v-.001c.02-.415.044-.776.114-1.055.07-.28.179-.468.373-.575a.876.876 0 01.027-.014c.022.359.2.725.514.804.343.09.838-.204 1.047-.445l.122-.004c.184-.005.337.006.495.143v.001c.121.102.179.296.229.512.05.217.09.453.239.621.287.32.38.534.371.672zM6.592 13.843v.003c-.034.435-.28.672-.656.758-.377.086-.888 0-1.398-.266-.565-.3-1.237-.27-1.667-.36-.216-.045-.357-.113-.421-.238-.064-.126-.066-.345.071-.72v-.001l.001-.002c.068-.209.018-.438-.015-.653-.033-.214-.049-.41.024-.546l.001-.001c.094-.181.232-.246.403-.307.17-.062.373-.11.533-.27l.001-.001h.001c.148-.157.26-.353.39-.492.11-.117.22-.195.385-.196h.005a.61.61 0 01.093.008c.22.033.411.187.596.437l.533.971v.001c.142.296.441.622.695.954.254.333.45.666.425.921z"
        />
        <path
          fill="#D6A312"
          d="M9.25 4.788c-.043-.084-.13-.164-.28-.225-.31-.133-.444-.142-.617-.254-.28-.181-.513-.244-.706-.244a.834.834 0 00-.272.047c-.236.08-.392.25-.49.342-.02.019-.044.035-.104.08-.06.043-.15.11-.28.208-.117.086-.154.2-.114.332.04.132.167.285.4.417h.001c.145.085.244.2.358.291a.801.801 0 00.189.117c.072.031.156.052.26.058.248.015.43-.06.59-.151.16-.092.296-.204.452-.255h.001c.32-.1.548-.301.62-.493a.324.324 0 00-.008-.27z"
        />
        <path
          fill="#202020"
          d="M8.438 5.26c-.255.133-.552.294-.869.294-.316 0-.566-.146-.745-.289-.09-.07-.163-.142-.218-.193-.096-.075-.084-.181-.045-.178.066.008.076.095.117.134.056.052.126.12.211.187.17.135.397.266.68.266.284 0 .614-.166.816-.28.115-.064.26-.179.379-.266.09-.067.087-.147.162-.138.075.009.02.089-.085.18-.105.092-.27.214-.403.283z"
        />
        <path
          fill="#ffffff"
          d="M12.337 10.694a1.724 1.724 0 00-.104 0h-.01c.088-.277-.106-.48-.621-.713-.534-.235-.96-.212-1.032.265-.005.025-.009.05-.011.076a.801.801 0 00-.12.054c-.252.137-.389.386-.465.692-.076.305-.098.674-.119 1.09-.013.208-.099.49-.186.79-.875.624-2.09.894-3.122.19-.07-.11-.15-.22-.233-.328a13.85 13.85 0 00-.16-.205.65.65 0 00.268-.05.34.34 0 00.186-.192c.063-.17 0-.408-.202-.68-.201-.273-.542-.58-1.043-.888-.368-.23-.574-.51-.67-.814-.097-.305-.084-.635-.01-.96.143-.625.51-1.233.743-1.614.063-.046.023.086-.236.567-.232.44-.667 1.455-.072 2.248.016-.564.15-1.14.377-1.677.329-.747 1.018-2.041 1.072-3.073.029.02.125.086.169.11.126.075.221.184.344.283a.85.85 0 00.575.2c.24 0 .427-.079.582-.168.17-.096.304-.204.433-.245.27-.085.486-.235.608-.41.21.83.7 2.027 1.014 2.611.167.31.5.969.643 1.762.091-.002.191.01.299.038.375-.973-.319-2.022-.636-2.314-.128-.124-.135-.18-.07-.177.343.304.795.917.96 1.608.075.315.09.646.01.973.04.017.08.034.12.054.603.293.826.548.719.897z"
        />
        <path
          fill="#E6E6E6"
          d="M8.04 8.062c-.556.002-1.099.251-1.558.716-.46.464-.814 1.122-1.018 1.888l.061.038v.004c.47.298.805.598 1.012.878.219.296.316.584.223.834a.513.513 0 01-.27.283l-.041.015c.074.097.146.197.213.3.944.628 2.042.396 2.867-.172.08-.278.153-.536.163-.698.021-.415.042-.792.124-1.12.082-.33.242-.63.544-.795.017-.01.034-.015.051-.023a.756.756 0 01.022-.094c-.242-.622-.591-1.14-1.01-1.5-.42-.36-.897-.551-1.382-.554zm2.37 2.155l-.002.005v-.002l.001-.004z"
        />
        <path
          fill="#ffffff"
          d="M9.278 3.833a1.05 1.05 0 01-.215.656 4.119 4.119 0 00-.218-.09l-.127-.045c.029-.035.085-.075.107-.127a.669.669 0 00.05-.243l.001-.01a.673.673 0 00-.035-.236.434.434 0 00-.108-.184.223.223 0 00-.156-.07H8.57a.228.228 0 00-.151.06.434.434 0 00-.122.175.676.676 0 00-.05.243v.01a.718.718 0 00.009.14 1.773 1.773 0 00-.354-.12 1.196 1.196 0 01-.01-.133v-.013a1.035 1.035 0 01.088-.447.793.793 0 01.25-.328.554.554 0 01.346-.123h.006c.125 0 .232.036.342.116a.78.78 0 01.257.324c.063.138.094.273.097.433l.001.012zM7.388 3.997a1.05 1.05 0 00-.277.125.623.623 0 00.002-.15v-.008a.651.651 0 00-.048-.192.37.37 0 00-.096-.141.158.158 0 00-.119-.045c-.042.004-.077.024-.11.065a.372.372 0 00-.07.156.626.626 0 00-.013.205v.008a.634.634 0 00.048.193.367.367 0 00.116.156l-.102.08-.078.056a.706.706 0 01-.16-.24c-.053-.12-.082-.24-.09-.381v-.001a1.071 1.071 0 01.045-.39.668.668 0 01.167-.292.359.359 0 01.264-.118c.084 0 .158.028.235.09a.68.68 0 01.199.271c.053.12.08.24.089.382v.001c.003.06.003.115-.002.17z"
        />
        <path
          fill="#202020"
          d="M7.806 4.335c.01.034.065.029.097.045.027.014.05.045.08.046.03.001.076-.01.08-.04.005-.038-.052-.063-.088-.077-.047-.019-.107-.028-.151-.003-.01.005-.021.018-.018.03zM7.484 4.335c-.01.034-.065.029-.096.045-.028.014-.05.045-.081.046-.03.001-.076-.01-.08-.04-.005-.038.052-.063.088-.077.047-.019.108-.028.152-.003.01.005.02.018.017.03z"
        />
      </svg>
    ),
    colors: {
      text: 'dark:text-text-100 text-black',
    },
  },
  tailwind: {
    component: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 32 32"
        height="100%"
        fill="#44a8b3"
      >
        <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
      </svg>
    ),
    colors: {
      text: 'text-[#44a8b3]',
    },
  },
  mongodb: {
    component: ({ className }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width="128"
        height="128"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#439934"
          d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051c-.057-8.084-.113-16.168-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#45A538"
          d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#46A037"
          d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#409433"
          d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182-1.72 3.503-3.863 6.77-6.353 9.763-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753c-.865-3.223-1.319-6.504-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#4FAA41"
          d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642-2.217-6.628-4.452-13.249-6.7-19.867-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879 2.265 6.703 4.526 13.407 6.768 20.118 2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78c-.056 3.351-.112 6.701-.167 10.052z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#4AA73C"
          d="M43.155 32.227c.21.274.511.516.617.826 2.248 6.618 4.483 13.239 6.7 19.867 2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9-1.737-5.187-3.483-10.371-5.242-15.551-.089-.263-.34-.469-.516-.702 1.09-2.947 2.181-5.894 3.272-8.84z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#57AE47"
          d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198-2.242-6.711-4.503-13.415-6.768-20.118-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#60B24F"
          d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#A9AA88"
          d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011c.075 3.334.529 6.615 1.394 9.838-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#B6B598"
          d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#C2C1A7"
          d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#CECDB7"
          d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#DBDAC7"
          d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#EBE9DC"
          d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#CECDB7"
          d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#4FAA41"
          d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
        />
      </svg>
    ),
    colors: {
      text: 'text-green-500',
    },
  },
};

export const TOOLS = {
  vscode: {
    component: ({ className }) => (
      <svg width="100%" viewBox="0 0 128 128">
        <path
          d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"
          fill="#2489ca"
        ></path>
        <path
          d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0"
          fill="#1070b3"
        ></path>
        <path
          d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"
          fill="#0877b9"
        ></path>
        <path
          d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"
          fill="#3c99d4"
        ></path>
      </svg>
    ),
    colors: {
      text: 'text-[#2489ca]',
    },
  },
  github: {
    component: ({ className }) => (
      <svg width="100%" viewBox="0 0 128 128">
        <g fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
          ></path>
          <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
        </g>
      </svg>
    ),
    colors: {
      text: 'dark:text-text-100 text-black',
    },
  },
  slack: {
    component: ({ className }) => <img src={Slack} className={className} />,
    colors: {
      text: 'text-[#AD34AF]',
    },
  },
  jira: {
    component: ({ className }) => <img src={Jira} className={className} />,
    colors: {
      text: 'text-[#2684ff]',
    },
  },
  figma: {
    component: ({ className }) => <img src={Figma} className={className} />,
    colors: {
      text: 'text-[#fa7361]',
    },
  },
  jenkins: {
    component: ({ className }) => <img src={Jenkins} className={className} />,
    colors: {
      text: 'text-[#d43f3b]',
    },
  },
  notion: {
    component: ({ className }) => <img src={Notion} className={className} />,
    colors: {
      text: 'text-[#FFFFFF]',
    },
  },
};
