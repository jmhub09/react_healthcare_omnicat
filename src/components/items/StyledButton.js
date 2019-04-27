import React from "react";
import "./../../scss/StyledButton.sass";
import "./../../scss/animista.scss";

// <StyledButton type="next" text="NEXT" />
// types ["anglefill",  "next",  "back",  "plus",  "angle",  "email",  "settings",  "search" ]

const anglefill = function(text = " ", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="standard flex color-bright">
        <div className="button flex">
          <span className="svg-btn-text">{text}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77623 4.61867C10.4796 4.99574 10.4796 6.00427 9.77623 6.38133L2.39266 10.3397C1.72648 10.6969 0.920166 10.2143 0.920167 9.45841L0.920167 1.54159C0.920167 0.785717 1.72648 0.30311 2.39266 0.660254L9.77623 4.61867Z"
              fill="#333"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const back = function(text = "BACK", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="next-button flex">
        <div className="next flex color-bright">
          <svg
            className="back-svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77623 4.61867C10.4796 4.99574 10.4796 6.00427 9.77623 6.38133L2.39266 10.3397C1.72648 10.6969 0.920166 10.2143 0.920167 9.45841L0.920167 1.54159C0.920167 0.785717 1.72648 0.30311 2.39266 0.660254L9.77623 4.61867Z"
              fill="#fff"
            />
          </svg>
          <span className="svg-btn-text">{text}</span>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const next = function(text = "NEXT", link = null) {
  // const types = ['download', 'save', 'cancel', 'next', 'back']
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="next-button flex">
        <div className="next flex color-bright">
          <span className="svg-btn-text">{text}</span>
          <svg
            className="next-svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77623 4.61867C10.4796 4.99574 10.4796 6.00427 9.77623 6.38133L2.39266 10.3397C1.72648 10.6969 0.920166 10.2143 0.920167 9.45841L0.920167 1.54159C0.920167 0.785717 1.72648 0.30311 2.39266 0.660254L9.77623 4.61867Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const plus = function(text = "ADD", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="css-btn standard flex color-bright">
        <div className="button flex">
          <span className="svg-btn-text">{text}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3488 5.16279H6.83719V0.651191C6.83719 0.44567 6.55811 3.05176e-05 5.99998 3.05176e-05C5.44184 3.05176e-05 5.16276 0.445694 5.16276 0.651191V5.16282H0.651161C0.445663 5.16279 0 5.44187 0 5.99998C0 6.55809 0.445663 6.8372 0.651161 6.8372H5.16279V11.3488C5.16279 11.5543 5.44184 12 6 12C6.55816 12 6.83721 11.5543 6.83721 11.3488V6.8372H11.3488C11.5543 6.8372 12 6.55814 12 5.99998C12 5.44182 11.5543 5.16279 11.3488 5.16279Z"
              fill="#333"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const angle = function(text = "READ MORE", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="css-btn standard flex color-bright">
        <div className="button flex">
          <span className="svg-btn-text">{text}</span>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.59435 6.59406L1.43453 11.7537C1.1063 12.0821 0.574138 12.0821 0.246071 11.7537C-0.0820235 11.4256 -0.0820235 10.8935 0.246071 10.5654L4.81171 5.99991L0.246203 1.43457C-0.0818908 1.10635 -0.0818908 0.574263 0.246203 0.24617C0.574297 -0.0820565 1.10643 -0.0820565 1.43466 0.24617L6.59448 5.4059C6.75853 5.57002 6.84046 5.7849 6.84046 5.99989C6.84046 6.21498 6.75837 6.43002 6.59435 6.59406Z"
              fill="#333"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const email = function(text = "Send Email", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="standard flex color-bright">
        <div className="round flex">
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.25 0H0.75C0.33525 0 0 0.33525 0 0.75V23.25C0 23.6647 0.33525 24 0.75 24H32.25C32.664 24 33 23.6647 33 23.25V0.75C33 0.33525 32.664 0 32.25 0ZM31.5 20.6857L22.209 11.3955L21.1485 12.456L31.1925 22.5H1.8075L11.8515 12.456L10.791 11.3955L1.5 20.6857V1.5H31.5V20.6857Z"
              fill="#3494e6"
            />
            <path
              d="M29.9841 1.5L16.4999 14.9843L3.01563 1.5H1.49988V2.10525L15.9696 16.575C16.2629 16.8683 16.7369 16.8683 17.0301 16.575L31.4999 2.10525V1.5H29.9841Z"
              fill="#3494e6"
            />
          </svg>
        </div>
        <div className="button flex up">
          <span className="svg-btn-text">{text}</span>
        </div>
        <div className="button" />
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const settings = function(text = "SETTINGS", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="standard flex color-bright">
        <div className="round flex">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M27.5156 11.4558L25.4801 11.1105C25.2681 10.426 24.9955 9.76564 24.6623 9.13561L25.8618 7.45753C26.3706 6.74269 26.2919 5.76734 25.6679 5.14942L23.8626 3.34413C23.5234 3.00488 23.0751 2.81708 22.5965 2.81708C22.2209 2.81708 21.8635 2.93218 21.5605 3.15027L19.8764 4.34976C19.2221 4.00445 18.5376 3.71973 17.8288 3.50769L17.4896 1.49643C17.3442 0.630127 16.599 9.15527e-05 15.7206 9.15527e-05H13.1702C12.2918 9.15527e-05 11.5466 0.630127 11.4012 1.49643L11.0499 3.55616C10.3714 3.76819 9.71103 4.04686 9.081 4.38611L7.41504 3.18662C7.11213 2.96853 6.74865 2.85343 6.37305 2.85343C5.89447 2.85343 5.44012 3.04123 5.10692 3.38048L3.29557 5.18577C2.67765 5.80369 2.59284 6.77903 3.10171 7.49388L4.31332 9.19619C3.98013 9.83228 3.71358 10.4926 3.5076 11.1772L1.49633 11.5164C0.630036 11.6618 0 12.4069 0 13.2854V15.8358C0 16.7142 0.630036 17.4594 1.49633 17.6047L3.55607 17.9561C3.7681 18.6346 4.04677 19.2949 4.38602 19.925L3.19258 21.5849C2.68371 22.2997 2.76246 23.2751 3.38644 23.893L5.19174 25.6983C5.53099 26.0375 5.97928 26.2253 6.45787 26.2253C6.83346 26.2253 7.19089 26.1102 7.49379 25.8921L9.1961 24.6805C9.80796 25.0016 10.4501 25.2621 11.1104 25.4681L11.4497 27.5036C11.5951 28.3699 12.3402 28.9999 13.2186 28.9999H15.7751C16.6535 28.9999 17.3987 28.3699 17.5441 27.5036L17.8894 25.4681C18.5739 25.256 19.2343 24.9834 19.8643 24.6502L21.5424 25.8497C21.8453 26.0678 22.2088 26.1829 22.5844 26.1829C23.0629 26.1829 23.5112 25.9951 23.8505 25.6559L25.6558 23.8506C26.2737 23.2327 26.3585 22.2573 25.8496 21.5425L24.6501 19.8583C24.9833 19.2222 25.262 18.5619 25.468 17.8834L27.5035 17.5442C28.3698 17.3988 28.9998 16.6536 28.9998 15.7752V13.2248C29.0119 12.3464 28.3819 11.6012 27.5156 11.4558ZM27.3763 15.7752C27.3763 15.854 27.3217 15.9206 27.243 15.9327L24.6986 16.3568C24.3775 16.4113 24.1231 16.6476 24.0443 16.9565C23.8141 17.8471 23.4628 18.7012 22.9902 19.4948C22.8267 19.7735 22.8388 20.1188 23.0266 20.3854L24.5229 22.4936C24.5653 22.5542 24.5593 22.645 24.5048 22.6996L22.6995 24.5048C22.6571 24.5473 22.6146 24.5533 22.5844 24.5533C22.548 24.5533 22.5177 24.5412 22.4935 24.523L20.3913 23.0267C20.1309 22.8389 19.7795 22.8268 19.5008 22.9903C18.7072 23.4629 17.853 23.8142 16.9625 24.0444C16.6475 24.1232 16.4112 24.3837 16.3628 24.6987L15.9326 27.2431C15.9205 27.3218 15.8539 27.3764 15.7751 27.3764H13.2247C13.1459 27.3764 13.0793 27.3218 13.0672 27.2431L12.6431 24.6987C12.5886 24.3776 12.3523 24.1232 12.0434 24.0444C11.1771 23.8203 10.3411 23.475 9.55958 23.0267C9.43236 22.954 9.28697 22.9176 9.14763 22.9176C8.98407 22.9176 8.81444 22.9661 8.67511 23.0691L6.55479 24.5775C6.5245 24.5957 6.49421 24.6078 6.46392 24.6078C6.43969 24.6078 6.39123 24.6018 6.34882 24.5594L4.54353 22.7541C4.489 22.6996 4.48295 22.6147 4.52535 22.5481L6.01563 20.4581C6.20343 20.1915 6.21554 19.8402 6.05198 19.5615C5.57945 18.7739 5.21597 17.9198 4.98576 17.0292C4.90095 16.7203 4.64651 16.484 4.3315 16.4295L1.76895 15.9933C1.69019 15.9812 1.63567 15.9146 1.63567 15.8358V13.2854C1.63567 13.2066 1.69019 13.14 1.76895 13.1279L4.29515 12.7038C4.61622 12.6493 4.87672 12.413 4.95547 12.098C5.17962 11.2075 5.52493 10.3472 5.9914 9.55361C6.15496 9.27494 6.13679 8.92964 5.94899 8.66914L4.44054 6.54883C4.39813 6.48825 4.40419 6.39738 4.45871 6.34285L6.26401 4.53756C6.30642 4.49515 6.34882 4.4891 6.37911 4.4891C6.41546 4.4891 6.44575 4.50121 6.46998 4.51939L8.56 6.00966C8.82656 6.19746 9.17792 6.20958 9.45659 6.04601C10.2441 5.57348 11.0983 5.21 11.9889 4.9798C12.2978 4.89498 12.5341 4.64055 12.5886 4.32553L13.0248 1.76298C13.0369 1.68423 13.1035 1.6297 13.1823 1.6297H15.7327C15.8115 1.6297 15.8781 1.68423 15.8902 1.76298L16.3143 4.28918C16.3688 4.61026 16.6051 4.87075 16.9201 4.94951C17.8349 5.17971 18.7072 5.53714 19.519 6.01572C19.7977 6.17929 20.143 6.16717 20.4095 5.97937L22.4995 4.47698C22.5298 4.45881 22.5601 4.44669 22.5904 4.44669C22.6146 4.44669 22.6631 4.45275 22.7055 4.49515L24.5108 6.30045C24.5653 6.35497 24.5714 6.43978 24.529 6.50642L23.0327 8.60856C22.8449 8.86906 22.8327 9.22042 22.9963 9.49909C23.4688 10.2927 23.8202 11.1469 24.0504 12.0374C24.1292 12.3524 24.3897 12.5887 24.7047 12.6372L27.249 13.0673C27.3278 13.0794 27.3823 13.146 27.3823 13.2248V15.7752H27.3763V15.7752Z"
                fill="#ff4b1f"
              />
              <path
                d="M14.5029 8.24509C11.0499 8.24509 8.245 11.05 8.245 14.503C8.245 17.9561 11.0499 20.761 14.5029 20.761C17.956 20.761 20.7609 17.9561 20.7609 14.503C20.7609 11.05 17.956 8.24509 14.5029 8.24509ZM14.5029 19.1253C11.9525 19.1253 9.88066 17.0535 9.88066 14.503C9.88066 11.9526 11.9525 9.88076 14.5029 9.88076C17.0534 9.88076 19.1252 11.9526 19.1252 14.503C19.1252 17.0535 17.0534 19.1253 14.5029 19.1253Z"
                fill="#ff4b1f"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="29"
                  height="29"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 29)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="button flex up">
          <span className="svg-btn-text">{text}</span>
        </div>
        <div className="button" />
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const search = function(text = "Search", link = null) {
  const body = text => (
    <div id="css-button" className="text-focus-in-200ms">
      <div className="standard flex color-bright">
        <div className="round flex">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2013 22.771L18.2512 16.5827C19.7811 14.7641 20.6193 12.4759 20.6193 10.0937C20.6193 4.52814 16.0912 0 10.5256 0C4.95996 0 0.431824 4.52814 0.431824 10.0937C0.431824 15.6593 4.95996 20.1875 10.5256 20.1875C12.615 20.1875 14.6061 19.5573 16.3084 18.361L22.3036 24.5963C22.5542 24.8565 22.8913 25 23.2525 25C23.5943 25 23.9186 24.8697 24.1648 24.6327C24.688 24.1293 24.7046 23.2946 24.2013 22.771ZM10.5256 2.63315C14.6394 2.63315 17.9862 5.97988 17.9862 10.0937C17.9862 14.2076 14.6394 17.5543 10.5256 17.5543C6.41171 17.5543 3.06497 14.2076 3.06497 10.0937C3.06497 5.97988 6.41171 2.63315 10.5256 2.63315Z"
              fill="#16a085"
            />
          </svg>
        </div>
        <div className="button flex up">
          <span className="svg-btn-text">{text}</span>
        </div>
        <div className="button" />
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="svg-btn-link">
      {body(text)}
    </a>
  ) : (
    body(text)
  );
};

const StyledButton = props => {
  return props.type === "anglefill" ? (
    anglefill(props.text, props.link)
  ) : props.type === "next" ? (
    next(props.text, props.link)
  ) : props.type === "back" ? (
    back(props.text, props.link)
  ) : props.type === "plus" ? (
    plus(props.text, props.link)
  ) : props.type === "angle" ? (
    angle(props.text, props.link)
  ) : props.type === "email" ? (
    email(props.text, props.link)
  ) : props.type === "settings" ? (
    settings(props.text, props.link)
  ) : props.type === "search" ? (
    search(props.text, props.link)
  ) : (
    <h4>whoops... {props}</h4>
  );
};

export default StyledButton;

// #################################################
//         Other Types see https://codepen.io/tidelake/pen/dLqEYJ
/*

<div className="save-button color-bright flex">
  <div className="save flex">SAVE</div>
</div>
<div className="save-button color-bright flex">
  <div className="save flex">ADD</div>
</div>
<div className="download color-bright flex">
  <p>DOWNLOAD</p>
  <div className="click-me flex">CLICK ME</div>
</div>

<div className="accept-button color-bright flex">
  <p>ACCEPT</p>
  <div className="cancel flex">
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5175 0.482886C16.8737 -0.160962 15.8304 -0.160962 15.1866 0.482886L5.38319 10.2862L2.77648 8.04706C2.14142 7.41197 1.1119 7.41197 0.47629 8.04706C-0.158763 8.68211 -0.158763 9.71216 0.47629 10.3472L4.37073 13.6923C5.00578 14.3274 6.0353 14.3274 6.67091 13.6923C6.73465 13.6286 6.78794 13.5577 6.83903 13.4868C6.84835 13.478 6.8588 13.472 6.86815 13.4632L17.5176 2.81325C18.1608 2.16996 18.1608 1.12617 17.5175 0.482886Z"
        fill="#333"
      />
    </svg>
  </div>
</div>

<div className="cancel-button color-bright flex">
  <p>CANCEL</p>
  <div className="cancel flex">
    <svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8265 18.2213L15.8478 13.2426L20.8266 8.26375C21.0534 8.03695 21.2372 7.23718 20.6212 6.62125C20.0053 6.00532 19.2055 6.18915 18.9787 6.41593L13.9999 11.3948L9.02111 6.41595C8.79436 6.18915 7.99456 6.00531 7.37866 6.62122C6.76275 7.23713 6.94656 8.03695 7.17334 8.26372L12.1522 13.2426L7.17334 18.2214C6.94659 18.4481 6.7627 19.2479 7.37866 19.8639C7.99462 20.4798 8.79441 20.296 9.02116 20.0692L14 15.0904L18.9788 20.0692C19.2056 20.296 20.0054 20.4798 20.6213 19.8639C21.2373 19.2479 21.0533 18.4481 20.8265 18.2213Z"
        fill="#333"
      />
    </svg>
  </div>
</div> */
