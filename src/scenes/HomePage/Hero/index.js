import React, { useContext, useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import MotionBtn from "@components/MotionBtn";
import HeroMoonEffect from "./components/HeroMoonEffect";
import { MotionValueContext } from "@/contexts/MotionStateWrapper";
import {
  btnVariants,
  greetingTextVariants,
  introContainerVariants,
  textContainerVariants
} from "@/scenes/HomePage/Hero/variants";
import { bottomGradient, container, greeting, intro, mobtnWrapper, textContainer } from "./hero.module.scss";


function Hero(){

  const { inView } = useContext( MotionValueContext );


  const btmGradient = useRef();

  useEffect( () => {
    btmGradient.current = document.body.querySelector( "#page-container .btm-gradient" );
  }, [] );


  return (
    <motion.section className={container} variants={{}}
                    viewport={{ amount: .8, once: false }}
                    onViewportLeave={() => {
                      // btmGradient.current.classList.remove( "hide-bg" );
                      inView.set( false );
                    }}
                    onViewportEnter={() => {
                      // btmGradient.current.classList.add( "hide-bg" );
                      inView.set( "hero-section" );
                    }}
    >

      <motion.div className={textContainer} variants={textContainerVariants}>

        <motion.div className={greeting} variants={greetingTextVariants}
                    transition={greetingTextVariants.transition}
        >
          <svg width="403" height="222" viewBox="0 0 403 222" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M121.163 120.957C123.337 111.868 126.866 102.655 130.586 96.2599C131.594 94.5528 132.478 93.1357 132.538 93.1215C132.751 93.0704 132.118 94.3294 130.508 97.1579C129.498 98.9956 129.382 99.3164 130.041 98.5724C131.598 96.7339 131.735 96.7662 130.672 98.6495C129.385 100.944 127.846 104.341 128.437 103.581C128.806 103.101 128.881 103.148 129.095 104.042C129.287 104.843 129.408 104.944 129.646 104.594C129.846 104.351 130.105 104.224 130.226 104.325C130.37 104.388 130.44 104.274 130.381 104.027C130.255 103.503 131.676 101.633 132.017 101.844C132.357 102.055 132.053 103.073 129.636 109.123C128.152 112.737 126.99 116.482 126.161 120.312C125.475 123.375 125 125.965 125.121 126.066C125.265 126.129 125.419 125.832 125.475 125.395C125.973 121.56 128.668 113.035 129.702 111.973C129.986 111.677 130.179 111.273 130.127 111.057C130.039 110.69 133.077 106.019 133.504 105.917C133.625 105.888 133.592 106.287 133.428 106.814C133.249 107.411 133.502 107.122 134.065 106.108C134.551 105.178 135.005 104.516 135.034 104.639C134.775 105.773 134.439 106.888 134.029 107.974C132.848 111.384 130.351 121.948 129.044 129.133C128.259 133.596 127.703 138.1 127.377 142.626C127.282 144.114 127.056 144.918 126.751 144.991C126.294 145.1 126.25 144.915 126.407 143.282C126.417 142.921 126.317 143.043 126.154 143.57C125.732 145.039 125.167 145.37 121.579 146.262C119.97 146.641 118.382 147.108 116.823 147.66C116.031 147.981 117.47 147.669 120.076 146.98C123.429 146.046 124.875 145.765 125.094 146.006C125.305 146.216 125.549 146.158 125.893 145.848C126.184 145.582 126.487 145.508 126.617 145.641C126.747 145.775 127.742 145.765 128.807 145.64C130.313 145.499 131.829 145.484 133.339 145.597C134.715 145.691 135.993 145.645 136.177 145.471C136.361 145.297 136.398 145.32 136.328 145.565C136.258 145.81 136.356 145.949 136.508 145.913C136.965 145.803 137.119 146.581 136.735 147.129C136.489 147.448 135.797 147.516 134.139 147.457C132.864 147.396 131.587 147.408 130.314 147.494C127.399 147.833 122.288 148.959 121.136 149.528C120.213 149.979 120.996 149.889 124.911 149.147C130.302 148.117 131.824 148.013 134.498 148.415C136.473 148.724 136.705 149.027 135.584 149.588C134.324 150.248 134.27 150.424 135.179 150.858C135.77 151.172 135.86 151.281 135.496 151.238C135.169 151.218 134.933 151.308 134.932 151.438C134.961 151.561 134.989 151.946 135.016 152.33C135.012 152.851 135.278 153.017 136.258 153.075L137.466 153.144L136.218 153.313C135.526 153.381 133.089 153.834 130.812 154.282C127.096 155.041 126.92 155.116 129.173 154.837C130.558 154.701 132.636 154.497 133.807 154.411L135.899 154.269L135.437 155.031C135.021 155.716 134.647 155.904 132.766 156.256C126.69 157.386 119.197 159.734 118.194 160.788C117.933 161.046 118.123 161.033 118.856 160.727C119.958 160.329 121.083 159.994 122.224 159.725C124.136 159.234 124.714 159.227 125.51 159.59C126.313 159.984 126.914 159.938 129.268 159.406C130.799 159.072 132.832 158.683 133.776 158.587L135.503 158.402L134.183 158.946L133.787 159.094L133.785 159.095L133.777 159.097C132.924 159.416 131.515 159.942 130.341 160.389C128.175 161.167 127.755 161.431 127.346 162.278C127.061 162.79 126.9 163.364 126.877 163.954C126.874 164.345 126.908 165.966 126.942 167.586C127.016 173.952 127.104 174.452 129.406 183.933C131.436 192.141 131.815 193.453 132.969 195.717C134.49 198.707 134.527 198.862 133.802 198.254C133.287 197.856 133.272 197.925 133.681 199.097C134.054 200.115 134.06 200.277 133.683 199.911C133.433 199.678 133.115 199.558 133.015 199.68C132.701 199.983 132.12 199.439 131.293 198.138C130.917 197.512 130.592 197.231 130.628 197.516C130.615 198.007 133.629 202.79 134.707 204.063C135.512 205.01 135.037 204.635 132.854 202.65C130.249 200.244 129.186 198.772 126.878 194.375C125.813 192.35 124.889 190.78 124.843 190.856C124.66 191.158 127.79 197.772 128.859 199.274C129.46 200.173 129.843 200.83 129.669 200.774C129.214 200.622 129.416 201.063 130.118 201.839C131.197 202.982 130.951 203.171 129.85 202.066C128.71 200.939 128.432 200.452 129.062 200.659C129.304 200.731 129.374 200.617 129.223 200.393C129.073 200.168 128.823 200.065 128.678 200.132C128.503 200.207 127.883 199.638 127.281 198.871C126.309 197.638 126.196 197.567 126.198 198.251C126.2 198.934 126.049 198.84 125.222 197.54C124.515 196.471 123.979 195.981 123.235 195.834C121.998 195.511 121.998 195.511 122.153 196.158C122.24 196.658 122.21 196.665 121.62 196.22C121.105 195.822 121.037 195.806 121.293 196.201C121.962 197.246 120.954 196.803 120.133 195.664C118.515 193.479 117.6 191.679 114.176 183.835C114.012 183.418 113.661 182.492 113.385 181.744L113.356 181.664C113.083 180.925 112.729 179.963 112.497 179.514C111.956 177.823 111.502 176.105 111.136 174.368L110.156 170.14L109.424 170.315C108.511 170.534 108.409 171.047 108.849 173.156L109.202 174.766L108.627 173.438C108.321 172.697 108.754 174.775 109.648 178.242C111.748 186.337 113.791 190.833 117.1 194.697C118.94 196.862 118.985 196.916 118.22 196.546C117.415 196.152 114.531 192.578 113.043 190.131C111.248 187.208 109.598 183.009 108.163 177.685C106.897 173.07 106.71 172.561 106.305 172.886C106.2 172.952 105.853 173.188 105.351 173.529L105.35 173.53C104.644 174.01 103.632 174.698 102.56 175.411C100.756 176.625 99.1124 177.832 98.9204 178.106C98.6287 178.502 98.7082 179.102 99.3693 181.191C100.996 186.371 102.315 191.072 102.125 190.954C101.592 189.906 101.147 188.813 100.796 187.689C99.2986 183.586 98.5661 182.814 99.6724 186.493C100.206 188.319 100.331 188.972 100.008 188.432C99.5606 187.489 99.1964 186.508 98.9194 185.5C98.6084 184.337 98.2275 183.419 98.1057 183.448C97.7402 183.535 97.4795 184.868 97.7739 185.156C98.0846 185.636 98.3194 186.162 98.4696 186.715C99.0643 188.527 101.586 195.023 101.954 195.75C102.044 195.92 102.086 196.112 102.075 196.305C102.064 196.497 102.001 196.682 101.892 196.839C101.623 197.197 101.636 197.519 102.013 198.016C102.395 198.754 102.68 199.54 102.862 200.353C103.188 201.504 103.669 202.606 104.291 203.626C104.686 204.177 105.004 204.78 105.235 205.419C105.106 205.677 102.399 202.581 101.203 200.815C100.586 199.856 99.303 197.59 98.351 195.766C97.3838 193.88 96.6622 192.75 96.6973 193.165C96.7951 194.38 98.6623 198.948 99.6919 200.558C100.684 202.145 100.544 202.503 99.483 201.031C99.1512 200.59 98.7961 200.317 98.689 200.407C98.6542 200.438 98.6137 200.461 98.5699 200.475C98.5261 200.489 98.4798 200.495 98.4339 200.49C98.3879 200.486 98.3431 200.473 98.3021 200.451C98.2611 200.429 98.2247 200.399 98.1951 200.363C98.1384 200.294 98.0599 200.249 97.9737 200.233C97.8875 200.218 97.7991 200.235 97.7243 200.28C97.5254 200.525 95.1723 197.83 95.0173 197.183C94.7823 196.691 94.4577 196.249 94.0611 195.881C93.7037 195.575 93.4312 195.18 93.2713 194.734C93.3329 194.589 93.1152 194.218 92.7977 193.968C92.2767 193.541 92.2534 193.579 92.6724 194.521C92.8621 195.011 93.134 195.464 93.476 195.859C93.9899 196.257 94.6883 198.5 94.5754 199.375C94.5169 200.072 94.4792 200.049 94.0593 199.237C93.7912 198.737 93.4334 198.293 93.0046 197.926C92.5347 197.545 92.1228 197.095 91.7825 196.59C91.4363 196.086 90.5937 194.855 89.9324 193.841C88.0901 191.123 85.8397 184.952 86.2739 183.806C86.9291 182.908 87.639 182.053 88.3994 181.245C89.4883 180.007 90.302 178.966 90.1958 178.926C90.113 178.849 89.095 179.711 87.9389 180.802C87.2245 181.521 86.4732 182.201 85.6881 182.839C85.5662 182.869 85.3936 182.552 85.2978 182.151C85.1059 181.35 84.6217 181.076 83.64 181.148C83.1305 181.172 83.0989 181.31 83.5474 182.375C84.0852 183.679 84.1809 185.154 83.7239 185.264C83.5713 185.3 83.2303 184.144 82.9169 182.298C82.5233 179.982 82.4841 179.144 82.8062 178.741C83.0286 178.46 84.8047 176.862 86.7027 175.235C90.9962 171.503 89.7978 172.017 84.9788 175.974C83.0432 177.577 81.1691 179.036 80.8331 179.247C80.016 179.736 79.6092 179.247 79.9667 178.184C80.1306 177.788 80.2039 177.358 80.1811 176.928C80.1 176.589 81.5816 174.703 82.0083 174.601C82.2823 174.535 87.8521 169.944 87.8152 169.79C87.7562 169.544 82.941 172.977 82.1745 173.812C81.4614 174.601 80.8982 174.671 80.9796 173.935C81.0515 173.429 81.0212 173.436 80.6453 173.885C80.4076 174.233 80.2607 174.638 80.2184 175.061C80.1696 175.398 80.0231 175.726 79.8401 175.77C79.2613 175.908 79.4206 173.884 80.1072 172.579C80.4547 171.877 80.6351 171.15 80.4845 170.925C80.334 170.7 80.4358 170.318 80.7571 170.046C81.4696 169.388 81.69 169.366 81.6095 169.972C81.5769 170.24 81.6897 170.441 81.8419 170.404C82.0249 170.361 82.088 170.086 82.0068 169.747C81.9762 169.58 81.9952 169.408 82.0614 169.253C82.1276 169.098 82.238 168.967 82.3783 168.877C82.6376 168.75 83.1114 168.44 83.417 168.237C83.7301 168.065 83.6378 168.217 83.2472 168.604C82.2514 169.559 82.6538 169.755 83.6938 168.855C84.1446 168.454 84.3844 167.973 84.2716 167.772C84.0295 167.439 85.1927 166.509 89.8238 163.381C90.8248 162.718 91.2462 162.324 90.7429 162.51C89.2243 163.323 87.7504 164.22 86.3277 165.196C82.8278 167.532 82.1797 167.785 83.1402 166.415C83.5317 165.898 83.5355 165.376 83.2183 164.051C82.6577 161.71 82.7536 153.903 83.3764 149.91C83.6071 148.602 83.7641 147.281 83.8466 145.954C83.872 145.355 83.9918 144.765 84.2014 144.206C84.4761 143.511 84.7149 142.802 84.917 142.081C85.4539 140.421 88.0619 135.302 88.2649 135.612C88.3625 135.751 88.2811 136.487 88.1312 137.207C87.8185 139.12 87.6131 141.051 87.516 142.989C87.3607 145.437 87.2228 147.684 87.2206 147.945C87.1955 148.245 87.2406 148.299 87.3793 148.07C87.4885 147.848 87.8213 145.88 88.1573 143.65C89.1695 136.568 91.4819 127.252 92.0947 127.66C92.2084 127.73 92.172 128.52 92.0213 129.371C91.6726 131.278 91.7295 131.786 92.2439 131.109C92.7517 130.401 92.7581 130.562 92.0793 133.917C91.4948 136.857 90.4791 147.685 90.7496 148.143C90.8477 148.282 91.1036 146.527 91.3409 144.288C91.9975 137.747 93.1744 132.841 94.6693 130.202C94.8237 129.905 94.5512 131.729 94.1418 133.651C93.7804 135.236 93.8099 135.359 94.1961 134.55L94.6516 133.626L94.4004 134.729C94.2895 135.342 94.0862 138.125 93.9895 140.951C93.8542 143.752 93.7303 146.192 93.6527 146.406C93.5981 146.582 93.6649 146.729 93.818 146.692C93.971 146.655 94.2055 145.753 94.335 144.679C94.4717 143.636 94.7175 142.241 94.8824 141.584L95.1801 140.405L96.0126 140.922C97.1476 141.627 97.322 142.759 96.9763 147.369C96.6227 151.948 96.7392 153.646 97.4403 153.478C97.7148 153.413 97.8478 152.893 97.8156 152.086C97.7447 150.31 98.1524 145.555 98.3687 145.112C98.692 144.577 98.6743 144.907 98.3731 148.627L98.3352 149.078C98.1277 151.54 98.0428 152.547 98.4434 152.807C98.7209 152.988 99.2313 152.81 100.095 152.508L100.304 152.436L100.345 152.421C101.318 152.102 102.271 151.722 103.197 151.282C103.87 150.908 104.565 150.578 105.28 150.295C106.455 149.818 106.524 149.704 106.572 148.422C106.566 144.982 106.81 141.549 107.302 138.151C108.139 131.957 109.612 125.742 110.913 122.825C111.573 121.4 112.113 119.919 112.528 118.4C113.043 116.759 113.723 115.177 114.555 113.68C115.411 112.14 116.521 110.05 117.008 108.989C118.02 106.89 119.953 104.603 120.928 104.37C121.446 104.246 121.422 104.415 120.69 105.665C120.354 106.176 120.087 106.732 119.896 107.318C119.755 107.987 119.544 108.638 119.266 109.26C118.66 110.773 118.098 113.807 118.4 113.995C119.013 112.645 119.542 111.257 119.982 109.838C121.396 105.786 122.809 102.94 123.263 103.222C123.376 103.29 123.127 104.133 122.716 105.111C121.517 107.906 121.5 108.105 122.518 106.168C123.667 103.971 124.063 104.007 123.149 106.245C122.785 107.148 122.589 107.944 122.703 108.015C122.93 108.158 124.112 104.616 124.079 103.94C124.052 103.555 124.989 103.168 125.276 103.425C125.314 103.448 124.607 105.474 123.714 107.935C122.821 110.396 122.167 112.507 122.242 112.685C122.339 112.824 122.238 113.207 121.999 113.557C121.517 114.226 120.626 117.501 120.891 117.665C120.997 117.707 121.207 117.104 121.403 116.308C121.598 115.511 121.838 114.9 121.952 114.971C122.067 115.041 121.734 116.88 121.246 119.016C120.327 122.981 120.065 124.445 120.248 124.401C120.632 123.277 120.938 122.126 121.163 120.957ZM106.12 170.613C106.64 170.228 106.83 169.14 106.415 168.751L106.415 168.752C106.396 168.734 106.379 168.716 106.364 168.699C106.319 168.651 106.282 168.611 106.237 168.588C106.019 168.478 105.609 168.749 103.23 170.318L102.66 170.694C100.07 172.389 99.5649 172.835 99.4298 173.617C99.3419 174.192 99.2955 174.268 99.2837 173.815C99.2799 173.261 99.1662 173.19 98.7084 173.43C98.1356 173.73 97.985 174.581 98.3169 175.967C98.5455 176.922 98.9176 176.995 99.3267 176.148C99.5422 175.704 99.4897 175.619 99.0254 175.698C98.4769 175.829 98.4695 175.798 98.9894 175.413C99.7541 174.839 100.028 174.774 99.8877 175.263C99.7942 175.547 99.9541 175.54 100.382 175.308C100.924 175.014 100.969 175.069 100.737 175.581C100.505 176.093 100.543 176.116 100.956 175.822C101.159 175.672 101.376 175.544 101.605 175.438C101.697 175.416 101.667 175.293 101.539 175.161C101.411 175.029 101.787 174.581 102.391 174.143C103.713 173.208 104.193 173.058 104.006 173.626C103.936 173.871 103.974 173.894 104.188 173.712C104.342 173.545 104.381 173.308 104.291 173.199C104.17 173.098 104.698 172.613 105.478 172.101C106.227 171.596 106.809 171.066 106.772 170.912L106.765 170.882L106.759 170.853C106.742 170.778 106.73 170.722 106.695 170.699C106.596 170.632 106.312 170.842 105.21 171.658L104.911 171.88C104.251 172.377 103.544 172.808 102.801 173.167C102.557 173.225 103.093 172.771 104.003 172.13C104.249 171.956 104.5 171.781 104.74 171.614C105.385 171.165 105.947 170.773 106.12 170.613Z"
                  fill="white" />
            <path
              d="M85.9732 109.743C87.0094 109.206 88.0857 108.752 89.1923 108.386C95.1086 106.317 102.707 104.952 108.212 104.941C108.893 104.945 109.689 104.934 110.318 104.926C110.672 104.921 110.973 104.917 111.17 104.917C112.189 104.868 112.197 104.899 111.886 105.755C111.637 106.465 111.393 106.654 110.746 106.646C109.94 106.643 109.94 106.643 110.629 106.967C112.1 107.592 110.979 108.023 107.809 107.968C104.06 107.921 97.3692 108.905 93.4974 110.092C87.4807 111.926 81.8141 114.769 76.7287 118.504C75.9943 119.071 75.2156 119.453 75.034 119.366C74.8293 119.317 74.783 119.394 74.949 119.549C75.0847 119.712 74.9304 120.009 74.5871 120.19C73.3512 120.94 67.8274 126.53 66.0381 128.878C63.5334 132.149 59.3753 139.398 58.4583 142.028C57.7357 144.122 57.3431 144.77 57.1734 144.062C57.1643 144.019 57.164 143.974 57.1723 143.931C57.1807 143.887 57.1976 143.846 57.222 143.81C57.2464 143.774 57.2779 143.743 57.3145 143.719C57.351 143.696 57.3919 143.68 57.4347 143.673C57.5869 143.637 57.6489 143.492 57.4902 143.367C57.362 143.234 57.4333 142.859 57.618 142.555C57.7661 142.315 57.8663 142.048 57.9127 141.768C58.0045 141.302 58.1696 140.856 58.4015 140.445C58.6597 140.006 58.8167 139.512 58.8609 139C58.7429 138.507 57.1396 142.441 55.8716 146.295C55.3191 148.023 53.7849 154.937 53.7699 155.95C53.7374 156.621 53.6716 157.289 53.5726 157.952C53.2664 160.305 53.195 163.775 53.4237 164.73C53.5598 165.131 53.5619 165.566 53.4295 165.966C53.3449 166.074 53.2883 166.202 53.2647 166.338C53.2411 166.475 53.2513 166.616 53.2943 166.748C53.3607 167.025 53.6143 168.756 53.8591 170.586C54.7061 177.353 58.0784 187.132 60.9225 191.206C61.3045 191.728 61.6511 192.276 61.9599 192.846C62.3261 193.704 65.1362 197.232 65.2749 197.004C65.145 196.586 64.9213 196.205 64.6217 195.89C64.1566 195.294 63.7631 194.645 63.4499 193.955C63.1957 193.432 62.438 192.017 61.7701 190.842C58.1581 184.639 57.1947 182.229 55.4536 175.092C54.3106 170.318 53.9011 168.07 53.8262 165.873C53.5768 160.526 53.8875 156.575 54.5274 156.422C55.1366 156.276 55.2086 156.845 54.9395 160.297C54.5181 165.805 54.767 168.188 56.5085 175.327C57.3871 178.863 58.394 182.53 58.7983 183.41C60.0319 186.274 63.2413 192.41 63.7921 192.963C64.2223 193.413 66.3092 196.073 66.9336 196.933C68.2006 198.615 69.5732 200.212 71.0426 201.714C71.344 201.958 71.6085 202.246 71.8271 202.569C72.7335 203.482 73.6922 204.34 74.6979 205.139C78.1284 208.03 86.0173 212.72 89.9528 214.221C92.9238 215.333 101.037 217.592 101.616 217.454C102.032 217.431 102.449 217.486 102.847 217.615C103.879 217.889 107.77 218.13 109.452 218.02C110.76 217.968 111.457 218.322 110.331 218.461C109.92 218.496 108.703 218.527 107.57 218.505C104.856 218.471 104.436 218.604 106.655 218.854C108.402 219.022 111.376 218.929 111.858 218.651C112.002 218.583 112.055 218.668 111.977 218.882C111.9 219.097 112.295 219.132 113.026 218.957C113.758 218.793 114.505 218.712 115.256 218.716C115.91 218.755 116.275 218.668 116.231 218.483C116.194 218.329 116.553 218.211 117.07 218.217C117.555 218.213 118.038 218.152 118.508 218.035C118.911 217.967 119.326 218.039 119.685 218.242C120.223 218.602 120.047 218.677 117.352 219.127C112.867 219.826 108.308 219.955 103.78 219.51C88.9164 218.218 75.1063 210.97 65.3841 199.357C64.7032 198.456 63.9516 197.612 63.1369 196.834C62.7832 197.374 69.6658 204.716 73.3219 207.749C76.7836 210.441 80.4772 212.805 84.3564 214.813C85.5936 215.396 86.6681 216.116 86.7271 216.362C86.8231 216.763 86.7316 216.785 86.2923 216.564C85.9965 216.407 85.801 216.129 85.8556 215.952C85.9102 215.776 85.7355 215.721 85.4459 215.855C85.1562 215.99 84.8523 215.932 84.8007 215.717C84.69 215.254 84.1221 214.9 84.2404 215.395C84.2843 215.578 83.7449 215.479 83.0555 215.156C82.3279 214.809 81.9198 214.451 82.0733 214.284C82.2801 214.072 82.2506 213.948 81.9774 213.883C81.8673 213.849 81.7509 213.842 81.6381 213.863C81.5254 213.884 81.4197 213.933 81.3302 214.006C81.2004 214.136 80.8366 213.963 80.52 213.582C80.2338 213.195 79.8101 212.906 79.6272 212.949C79.2006 213.052 74.5777 209.892 72.5074 208.107C71.7294 207.414 70.3087 206.191 69.3795 205.404C67.3926 203.698 62.342 197.676 60.7642 195.122C58.6241 191.693 56.6677 188.149 54.9036 184.506C53.6335 181.488 51.6077 172.625 51.2511 168.444C50.6599 161.932 51.1143 155.377 52.5963 149.035C53.5929 144.855 54.4627 142.432 55.0111 142.301C55.1145 142.289 55.2086 142.236 55.2733 142.154C55.3379 142.071 55.3679 141.966 55.3566 141.86C55.1871 141.152 60.9381 130.59 62.8038 128.156C63.1723 127.677 63.8477 126.864 64.3003 126.332C64.6313 125.976 64.9389 125.598 65.221 125.2C65.3519 124.94 67.6595 122.466 69.1988 120.958C69.6224 120.595 69.9873 120.167 70.2805 119.689C70.3414 119.582 70.4252 119.491 70.5257 119.421C70.6262 119.352 70.7409 119.307 70.8613 119.289C71.1614 119.214 71.426 119.036 71.6105 118.784C72.2801 117.679 81.1521 111.809 83.577 110.903C84.3997 110.569 85.2001 110.182 85.9732 109.743Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M138.501 114.917C138.339 115.385 138.229 115.87 138.171 116.364C138.208 116.518 139.258 117.406 140.521 118.374C146.298 122.854 150.266 127.05 154.049 132.756C154.618 133.638 155.25 134.477 155.939 135.267C156.09 135.377 156.447 135.949 156.881 136.729C156.004 137.456 155.15 138.239 154.321 139.08C148.161 145.24 145.081 152.68 145.081 161.4C145.081 170.12 148.161 177.56 154.321 183.72C156.116 185.491 158.013 187.008 160.012 188.27C160.002 188.291 159.992 188.312 159.982 188.334C156.251 196.163 151.47 202.162 144.248 208.061C142.572 209.455 140.816 210.745 138.988 211.925C138.671 212.112 138.284 212.338 137.877 212.577L137.874 212.579L137.871 212.58C137.084 213.041 136.22 213.546 135.628 213.902C133.945 214.826 132.198 215.625 130.401 216.294C128.426 217.06 126.785 217.876 126.707 218.091C126.607 218.343 126.523 218.395 126.464 218.149C126.412 217.933 124.889 218.168 121.957 218.837C119.55 219.414 117.395 219.832 117.183 219.752C117.008 219.696 116.863 219.764 116.907 219.948C116.944 220.103 117.514 220.194 118.169 220.103C119.044 219.991 118.93 220.051 117.657 220.388C116.661 220.639 115.645 220.806 114.62 220.887C113.882 220.901 113.242 221.054 113.18 221.2C113.048 221.59 118.216 220.971 121.354 220.22C136.864 216.506 149.831 207.017 158.504 193.052C159.401 191.602 160.208 190.202 160.933 188.829C165.655 191.583 170.931 192.96 176.761 192.96C182.521 192.96 187.841 191.52 192.721 188.64C197.681 185.68 201.521 181.8 204.241 177L193.441 173.76C189.281 179.36 183.721 182.16 176.761 182.16C172.485 182.16 168.574 180.957 165.027 178.553C165.337 177.412 165.611 176.245 165.854 175.039C166.801 170.383 166.953 169.532 166.914 168.434L166.892 167.88H207.721C208.121 165.64 208.321 163.48 208.321 161.4C208.321 152.68 205.241 145.24 199.081 139.08C192.921 132.84 185.481 129.72 176.761 129.72C170.238 129.72 164.441 131.434 159.369 134.861C157.97 132.187 153.893 126.828 149.165 121.644C146.643 119.037 143.823 116.749 140.767 114.828L138.912 113.677L138.501 114.917ZM161.918 146.823C162.755 149.81 163.502 150.442 163.728 148.156C163.805 147.348 163.725 146.499 163.434 145.425C163.476 145.39 163.519 145.355 163.561 145.32C167.401 142.2 171.801 140.64 176.761 140.64C181.721 140.64 186.081 142.2 189.841 145.32C193.681 148.44 196.121 152.36 197.161 157.08H165.911C165.718 155.422 165.488 154.239 165.269 154.171C165.094 154.115 165.058 154.906 165.195 155.882C165.246 156.281 165.292 156.68 165.334 157.08H156.481C157.293 153.089 159.105 149.67 161.918 146.823ZM165.471 167.88H157.081C158.354 171.775 160.61 175.039 163.847 177.671C164.665 174.464 165.208 171.187 165.471 167.88ZM166.222 167.88C166.172 169.164 166.296 169.289 166.601 168.346L166.747 167.88H166.222Z"
                  fill="white" />
            <path
              d="M79.6863 162.482C79.6764 155.579 80.4258 150.905 82.0213 148.015C82.3106 147.418 82.6615 146.854 83.0682 146.333C83.2181 146.297 83.1823 146.398 82.3349 148.784L82.2959 148.894C81.9236 149.894 81.6879 150.928 81.7543 151.205C81.7857 151.613 81.7174 152.021 81.5555 152.393C80.9214 153.783 80.4023 163.32 80.7864 165.866C81.1424 168.159 80.9769 168.948 80.1613 169.175C79.8262 169.256 79.6597 167.081 79.6863 162.482Z"
              fill="white" />
            <path
              d="M146.606 202.317C146.682 202.364 147.302 201.727 147.962 200.852C148.623 199.977 149.243 199.34 149.321 199.388C149.544 199.683 149.702 200.023 149.785 200.385C150.045 201.202 149.921 201.492 148.634 202.842C146.649 204.913 144.591 206.677 144.111 206.694C143.884 206.683 143.723 206.819 143.752 206.943C143.789 207.097 143.452 207.568 143.007 208C142.432 208.561 142.227 208.643 142.313 208.33C142.422 207.978 142.338 208.031 141.992 208.471C141.332 209.346 139.863 210.479 138.199 211.334C137.591 211.62 137.016 211.976 136.488 212.395C136.162 212.694 135.777 212.919 135.358 213.056C134.959 213.188 134.582 213.377 134.237 213.618C133.769 214.088 129.063 216.095 126.631 216.84C121.273 218.546 121.09 218.59 120.272 218.134C119.498 217.733 119.559 217.719 122.544 217.134C123.773 216.927 124.978 216.595 126.141 216.143C126.986 215.702 127.869 215.338 128.78 215.055C130.42 214.421 132.018 213.679 133.564 212.835C135.045 212.024 136.617 211.192 137.083 210.982C137.448 210.864 137.764 210.628 137.985 210.31C138.063 210.097 137.835 210.086 137.437 210.311C136.788 210.695 136.781 210.664 137.427 209.728C137.988 208.998 138.684 208.389 139.478 207.934C141.609 206.503 143.615 204.89 145.475 203.11C146.003 202.624 146.492 202.246 146.606 202.317Z"
              fill="white" />
            <path
              d="M261.47 192.96H272.27V158.52C272.27 151.16 269.83 144.52 264.95 138.6C260.07 132.68 253.95 129.72 246.59 129.72C239.23 129.72 233.07 132.68 228.11 138.6C223.15 144.44 220.67 150.88 220.67 157.92V192.96H231.47V157.92C231.47 153.68 232.95 149.72 235.91 146.04C238.95 142.36 242.51 140.52 246.59 140.52C250.75 140.52 254.27 142.4 257.15 146.16C260.03 149.92 261.47 154.04 261.47 158.52V192.96Z"
              fill="white" />
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M315.982 129.72C307.262 129.72 299.782 132.84 293.542 139.08C287.382 145.24 284.302 152.68 284.302 161.4C284.302 170.12 287.382 177.56 293.542 183.72C299.782 189.88 307.262 192.96 315.982 192.96C324.702 192.96 332.142 189.88 338.302 183.72C344.462 177.56 347.542 170.12 347.542 161.4C347.542 152.68 344.462 145.24 338.302 139.08C332.142 132.84 324.702 129.72 315.982 129.72ZM330.622 146.76C334.702 150.84 336.742 155.72 336.742 161.4C336.742 167.16 334.702 172.08 330.622 176.16C326.622 180.16 321.742 182.16 315.982 182.16C310.302 182.16 305.422 180.16 301.342 176.16C297.262 172.08 295.222 167.16 295.222 161.4C295.222 155.72 297.262 150.84 301.342 146.76C305.422 142.68 310.302 140.64 315.982 140.64C321.742 140.64 326.622 142.68 330.622 146.76Z"
                  fill="white" />
            <path
              d="M372.982 164.52L389.902 192.96H402.502L379.942 155.16L398.662 129.72H385.342L370.102 150.24V129.72H359.302V192.96H370.102V168.48L372.982 164.52Z"
              fill="white" />
            <path d="M51 0H65.76V87.96H51V0ZM46.56 47.52L43.68 62.28H14.76V87.96H0V0H14.76V47.52H46.56Z"
                  fill="white" />
            <path
              d="M77.8125 87.96V24.72H88.6125V87.96H77.8125ZM88.4925 14.88C88.4925 16.4 87.9725 17.68 86.9325 18.72C85.8925 19.76 84.6525 20.28 83.2125 20.28C81.7725 20.28 80.5325 19.76 79.4925 18.72C78.4525 17.68 77.9325 16.4 77.9325 14.88C77.9325 13.44 78.4525 12.2 79.4925 11.16C80.5325 10.12 81.7725 9.6 83.2125 9.6C84.6525 9.6 85.8925 10.12 86.9325 11.16C87.9725 12.2 88.4925 13.44 88.4925 14.88Z"
              fill="white" />
            <path
              d="M110.864 82.8C110.864 83.28 110.784 83.96 110.624 84.84C110.544 85.64 109.664 87.2 107.984 89.52C106.384 91.84 104.064 94.04 101.024 96.12C101.344 95.8 101.704 95.36 102.104 94.8C102.504 94.32 102.984 93.32 103.544 91.8C104.104 90.36 104.224 89 103.904 87.72C101.664 86.92 100.544 85.28 100.544 82.8C100.544 81.36 101.024 80.12 101.984 79.08C103.024 78.04 104.264 77.52 105.704 77.52C107.144 77.52 108.344 78.04 109.304 79.08C110.344 80.12 110.864 81.36 110.864 82.8Z"
              fill="white" />
            <path
              d="M196.44 25.72H207.24V88.96H196.44V81.16C190.44 86.36 183.52 88.96 175.68 88.96C166.96 88.96 159.48 85.88 153.24 79.72C147.08 73.56 144 66.12 144 57.4C144 48.68 147.08 41.24 153.24 35.08C159.48 28.84 166.96 25.72 175.68 25.72C183.52 25.72 190.44 28.32 196.44 33.52V25.72ZM175.68 78.16C181.44 78.16 186.32 76.16 190.32 72.16C194.4 68.08 196.44 63.16 196.44 57.4C196.44 51.72 194.4 46.84 190.32 42.76C186.32 38.68 181.44 36.64 175.68 36.64C170 36.64 165.12 38.68 161.04 42.76C156.96 46.84 154.92 51.72 154.92 57.4C154.92 63.16 156.96 68.08 161.04 72.16C165.12 76.16 170 78.16 175.68 78.16Z"
              fill="white" />
            <path
              d="M284.506 25.72C291.866 25.72 297.986 28.68 302.866 34.6C307.826 40.52 310.306 47.16 310.306 54.52V88.96H299.386V54.52C299.386 50.04 297.946 45.92 295.066 42.16C292.186 38.4 288.666 36.52 284.506 36.52C280.426 36.52 276.866 38.36 273.826 42.04C270.866 45.72 269.386 49.68 269.386 53.92V88.96H258.586V54.52C258.586 50.04 257.146 45.92 254.266 42.16C251.386 38.4 247.866 36.52 243.706 36.52C239.626 36.52 236.066 38.36 233.026 42.04C230.066 45.72 228.586 49.68 228.586 53.92V88.96H217.666V53.92C217.666 46.88 220.146 40.44 225.106 34.6C230.146 28.68 236.346 25.72 243.706 25.72C247.866 25.72 251.706 26.76 255.226 28.84C258.746 30.92 261.666 33.72 263.986 37.24C269.186 29.56 276.026 25.72 284.506 25.72Z"
              fill="white" />
          </svg>

        </motion.div>

        <motion.div className={intro} variants={introContainerVariants}
                    transition={introContainerVariants.transition}>
          <Typography className="intro-txt" variant="body1">
            I'm Web-Developer, Firmly standing on <span>S-O-L-I-D</span> front-end,
            less frame-work, more
            engineering patterns!
          </Typography>
        </motion.div>


        <motion.div className={mobtnWrapper} variants={btnVariants} transition={btnVariants.transition}>
          <MotionBtn text="download CV" />
        </motion.div>

      </motion.div>

      <HeroMoonEffect />

      <div className={bottomGradient} />

    </motion.section>
  );
}

export default Hero;
