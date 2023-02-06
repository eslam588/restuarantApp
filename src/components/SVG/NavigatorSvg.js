

export const CloseSvg = () => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "1.3125rem", height: "1.3125rem" }}
      viewBox="0 0 512 512"
    >
      <path d="M443.6 387.1L312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"></path>
    </svg>
    );
  }

  export const CloseSvgarea = ({deleteareaname}) => {
    return (
      <svg
      onClick={deleteareaname}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "0.80rem", height: "0.80rem"}}
      viewBox="0 0 512 512"
    >
      <path d="M443.6 387.1L312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z"></path>
    </svg>
    );
  }


export const IconGridSvg = ({className,...props}) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={className}
        {...props}
        style={{ width: "1.3125rem", height: "1.3125rem" }}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.067 2.8a.267.267 0 00-.267.267v4.266c0 .148.12.267.267.267h4.266c.148 0 .267-.12.267-.267V3.067a.267.267 0 00-.267-.267H4.067zM2.2 3.067c0-1.031.836-1.867 1.867-1.867h4.266c1.031 0 1.867.836 1.867 1.867v4.266A1.867 1.867 0 018.333 9.2H4.067A1.867 1.867 0 012.2 7.333V3.067zM4.067 12.4a.267.267 0 00-.267.267v4.266c0 .148.12.267.267.267h4.266c.148 0 .267-.12.267-.267v-4.266a.267.267 0 00-.267-.267H4.067zm-1.867.267c0-1.031.836-1.867 1.867-1.867h4.266c1.031 0 1.867.836 1.867 1.867v4.266A1.867 1.867 0 018.333 18.8H4.067A1.867 1.867 0 012.2 16.933v-4.266zM13.667 2.8a.267.267 0 00-.267.267v4.266c0 .148.12.267.267.267h4.266c.148 0 .267-.12.267-.267V3.067a.267.267 0 00-.267-.267h-4.266zm-1.867.267c0-1.031.836-1.867 1.867-1.867h4.266c1.031 0 1.867.836 1.867 1.867v4.266A1.867 1.867 0 0117.933 9.2h-4.266A1.867 1.867 0 0111.8 7.333V3.067zm1.867 9.333a.267.267 0 00-.267.267v4.266c0 .148.12.267.267.267h4.266c.148 0 .267-.12.267-.267v-4.266a.267.267 0 00-.267-.267h-4.266zm-1.867.267c0-1.031.836-1.867 1.867-1.867h4.266c1.031 0 1.867.836 1.867 1.867v4.266a1.867 1.867 0 01-1.867 1.867h-4.266a1.867 1.867 0 01-1.867-1.867v-4.266z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
  

  export const IconListSvg = ({className,...props}) =>  {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={className}
        style={{ width: "1.3125rem", height: "1.3125rem" }}
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.417 3.6a.75.75 0 00-.75-.75H3a.75.75 0 000 1.5h10.667a.75.75 0 00.75-.75zm0 6.4a.75.75 0 00-.75-.75H3a.75.75 0 000 1.5h10.667a.75.75 0 00.75-.75zm0 6.4a.75.75 0 00-.75-.75H3a.75.75 0 000 1.5h10.667a.75.75 0 00.75-.75zM18.25 2.75v1.7h-1.7v-1.7h1.7zm1.5-.217c0-.708-.575-1.283-1.283-1.283h-2.134c-.708 0-1.283.575-1.283 1.283v2.134c0 .708.575 1.283 1.283 1.283h2.134c.708 0 1.283-.575 1.283-1.283V2.533zm-1.5 6.617v1.7h-1.7v-1.7h1.7zm1.5-.217c0-.708-.575-1.283-1.283-1.283h-2.134c-.708 0-1.283.575-1.283 1.283v2.134c0 .708.575 1.283 1.283 1.283h2.134c.708 0 1.283-.575 1.283-1.283V8.933zm-1.5 6.617v1.7h-1.7v-1.7h1.7zm1.5-.217c0-.708-.575-1.283-1.283-1.283h-2.134c-.708 0-1.283.575-1.283 1.283v2.134c0 .708.575 1.283 1.283 1.283h2.134c.708 0 1.283-.575 1.283-1.283v-2.134z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }



  export const  SearchSvg = () => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 122.879 119.799"
    >
      <path d="M49.988 0h.016v.007C63.803.011 76.298 5.608 85.34 14.652c9.027 9.031 14.619 21.515 14.628 35.303h.007V50.028h-.007a49.932 49.932 0 01-3.471 18.301v.007a50.011 50.011 0 01-5.547 10.307l29.082 26.139.018.016.157.146.011.011a8.602 8.602 0 012.649 5.78 8.611 8.611 0 01-1.979 5.971l-.011.016-.175.203-.035.035-.146.16-.016.021a8.594 8.594 0 01-5.78 2.646 8.602 8.602 0 01-5.971-1.978l-.015-.011-.204-.175-.029-.024-29.745-26.734c-.88.62-1.778 1.209-2.687 1.765a50.063 50.063 0 01-3.813 2.115c-6.699 3.342-14.269 5.222-22.272 5.222v.007h-.016v-.007c-13.799-.004-26.296-5.601-35.338-14.645C5.605 76.291.016 63.805.007 50.021H0v-.049h.007c.004-13.799 5.601-26.296 14.645-35.338C23.683 5.608 36.167.016 49.955.007V0h.033zm.016 11.21v.007h-.049v-.007c-10.686.007-20.372 4.35-27.384 11.359-7.011 7.009-11.358 16.705-11.361 27.404h.007v.049h-.007c.007 10.686 4.347 20.367 11.359 27.381 7.009 7.012 16.705 11.359 27.403 11.361v-.007h.049v.007c10.686-.007 20.368-4.348 27.382-11.359 7.011-7.009 11.358-16.702 11.36-27.4h-.006v-.049h.006c-.006-10.686-4.35-20.372-11.358-27.384-7.009-7.012-16.702-11.359-27.401-11.362z"></path>
    </svg>
    );
  }


