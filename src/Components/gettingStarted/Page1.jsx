import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
		loginButton:{
			marginTop:theme.spacing(2),
		},
		svgVector:{
			position:"absolute",
			top:"20vh",
			left:"10vw"
		},
		infoContainer:{
			position:"absolute",
			top:"20vh",
			right:"10vw",
			width:"35vw"
		},
		infoTitle:{
			fontSize:theme.spacing(4),
			fontWeight:"bold",
		},
		infoDesc:{
			marginTop:theme.spacing(2),
			fontWeight:500
		},
		btnContainer:{
			position:"absolute",
			bottom:"25vh",
			right:"10vw",
			width:"35vw"
		},
		btnSubContainer:{
			display:"flex",
			marginTop:theme.spacing(4)
		},
		btnDesc:{
			fontWeight:700,
			marginTop:theme.spacing(3),
			marginRight:theme.spacing(4)
		},
}))

function Page1() {

    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <CssBaseline/>
            <svg className={classes.svgVector} width="40vw" viewBox="0 0 540 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M313.332 370.591C309.32 373.469 304.97 375.844 300.381 377.663C299.179 378.144 297.97 378.592 296.74 379H234.002C233.748 378.558 233.501 378.111 233.247 377.663C228.158 368.545 223.542 359.074 222.233 348.773C220.663 336.407 225.065 322.404 235.946 316.328C237.371 315.532 238.881 314.9 240.447 314.443C241.095 314.242 241.757 314.082 242.425 313.941C246.503 313.035 250.749 313.233 254.726 314.514C258.703 315.794 262.267 318.112 265.053 321.228C267.838 324.344 269.744 328.146 270.574 332.244C271.404 336.341 271.129 340.586 269.776 344.542C279 335.077 277.277 319.73 274.098 306.903C270.912 294.076 267.051 279.798 273.537 268.274C277.137 261.864 283.475 257.887 290.582 256.282C290.803 256.236 291.023 256.189 291.237 256.149C299.71 254.431 308.519 255.976 315.904 260.474C329.502 269.043 336.482 285.306 338.746 301.228C342.4 326.855 334.318 355.451 313.332 370.591Z" fill="#EE5A5A"/>
                <path d="M247.347 322.11C252.37 332.315 253.972 343.868 251.916 355.057C250.364 363.26 246.945 370.996 241.924 377.663C241.583 378.117 241.236 378.565 240.882 379H238.404C238.784 378.565 239.158 378.117 239.512 377.663C244.073 371.977 247.38 365.389 249.215 358.333C251.05 351.276 251.372 343.911 250.159 336.722C248.72 328.633 245.393 321 240.447 314.443C241.095 314.242 241.757 314.082 242.425 313.941C244.305 316.512 245.953 319.246 247.347 322.11Z" fill="white"/>
                <path d="M307.367 329.508C306.831 335.16 305.474 340.704 303.34 345.965C301.372 350.62 298.72 354.955 295.471 358.825C288.839 366.813 280.062 372.822 270.531 376.819C269.836 377.113 269.135 377.394 268.427 377.662C267.198 378.143 265.956 378.584 264.706 378.998H257.94C259.537 378.597 261.126 378.15 262.696 377.662C266.428 376.499 270.07 375.063 273.59 373.364C282.539 369.119 290.309 362.74 296.219 354.788C302.558 346.031 305.357 335.504 305.838 324.802C306.345 313.352 304.856 301.694 302.244 290.552C299.579 279.131 295.526 268.079 290.175 257.645C290.055 257.409 290.031 257.135 290.106 256.882C290.182 256.628 290.353 256.413 290.582 256.281C290.775 256.154 291.009 256.106 291.237 256.148C291.348 256.176 291.451 256.23 291.539 256.304C291.627 256.378 291.697 256.471 291.744 256.575C292.406 257.865 293.054 259.156 293.675 260.459C298.861 271.326 302.682 282.795 305.05 294.602C307.34 305.992 308.569 317.911 307.367 329.508Z" fill="white"/>
                <path d="M371.234 360.706L378.587 364.313L395.988 337.648L385.136 332.324L371.234 360.706Z" fill="#FFB8B8"/>
                <path d="M370.536 357.383L385.016 364.486L385.016 364.486C386.228 365.081 387.311 365.908 388.203 366.922C389.096 367.935 389.78 369.114 390.216 370.392C390.653 371.67 390.834 373.022 390.749 374.37C390.664 375.718 390.314 377.036 389.72 378.248L389.573 378.548L365.865 366.918L370.536 357.383Z" fill="#2F2E41"/>
                <path d="M444.101 373.281L452.29 373.28L456.185 341.672H444.1L444.101 373.281Z" fill="#FFB8B8"/>
                <path d="M442.012 367.93L458.138 367.93H458.139C459.489 367.93 460.825 368.196 462.072 368.712C463.319 369.229 464.452 369.987 465.406 370.942C466.36 371.897 467.117 373.031 467.634 374.279C468.15 375.526 468.416 376.864 468.416 378.214V378.549L442.013 378.549L442.012 367.93Z" fill="#2F2E41"/>
                <path d="M426.512 155.135C435.572 155.135 442.917 147.785 442.917 138.718C442.917 129.651 435.572 122.301 426.512 122.301C417.451 122.301 410.107 129.651 410.107 138.718C410.107 147.785 417.451 155.135 426.512 155.135Z" fill="#FFB8B8"/>
                <path d="M442.848 362.854C442.074 362.853 441.33 362.553 440.771 362.017C440.213 361.481 439.882 360.751 439.848 359.977L433.507 275.513C433.5 275.292 433.42 275.079 433.279 274.908C433.138 274.737 432.945 274.618 432.729 274.569C432.513 274.519 432.287 274.543 432.087 274.635C431.886 274.728 431.721 274.884 431.618 275.081L391.054 352.58C390.686 353.275 390.061 353.799 389.313 354.041C388.565 354.283 387.752 354.223 387.047 353.875L375.739 348.216C375.03 347.86 374.49 347.237 374.237 346.484C373.984 345.731 374.038 344.908 374.388 344.195L398.593 295.111L414.625 258.344C420.813 246.146 427.384 239.859 434.714 239.126C442.234 238.375 450.264 243.549 459.268 254.946L459.342 255.039L459.34 255.157L458.004 358.334C458.006 359.084 457.728 359.807 457.223 360.36C456.719 360.914 456.025 361.258 455.279 361.325L443.142 362.84C443.043 362.849 442.945 362.854 442.848 362.854Z" fill="#2F2E41"/>
                <path d="M409.197 264.282C410.09 263.731 410.851 262.991 411.427 262.113C412.003 261.236 412.379 260.243 412.53 259.204C412.681 258.165 412.602 257.106 412.3 256.101C411.997 255.095 411.478 254.169 410.779 253.386L413.253 187.977L401.23 189.476L400.216 253.11C398.98 254.372 398.25 256.045 398.164 257.81C398.077 259.575 398.641 261.311 399.748 262.688C400.855 264.065 402.428 264.988 404.17 265.282C405.911 265.576 407.7 265.22 409.197 264.282Z" fill="#FFB8B8"/>
                <path d="M416.803 199.54L400.657 197.704C400.198 197.652 399.755 197.501 399.359 197.262C398.963 197.023 398.623 196.702 398.363 196.319C398.102 195.937 397.927 195.503 397.849 195.047C397.771 194.591 397.793 194.124 397.911 193.676L402.08 178.01C402.36 175.66 403.561 173.516 405.418 172.05C407.275 170.584 409.637 169.915 411.987 170.189C414.336 170.463 416.481 171.659 417.951 173.513C419.422 175.367 420.097 177.729 419.83 180.081L420.381 196.232C420.397 196.694 420.313 197.155 420.135 197.581C419.956 198.008 419.688 198.392 419.349 198.706C419.009 199.02 418.606 199.257 418.167 199.401C417.727 199.545 417.262 199.592 416.803 199.54V199.54Z" fill="#6C63FF"/>
                <path d="M486.351 158.367C486.27 158.728 486.216 159.095 486.192 159.464L457.499 176.029L450.525 172.011L443.09 181.751L454.746 190.065C455.687 190.737 456.821 191.085 457.977 191.056C459.133 191.028 460.249 190.626 461.157 189.909L490.744 166.55C492.079 167.045 493.533 167.121 494.912 166.768C496.292 166.416 497.532 165.651 498.466 164.576C499.401 163.501 499.987 162.167 500.145 160.751C500.304 159.335 500.028 157.905 499.354 156.649C498.68 155.394 497.641 154.374 496.373 153.724C495.106 153.075 493.671 152.827 492.26 153.014C490.848 153.2 489.527 153.812 488.471 154.769C487.416 155.725 486.677 156.98 486.351 158.367Z" fill="#FFB8B8"/>
                <path d="M456.54 176.812L447.267 188.84C447.003 189.182 446.668 189.464 446.286 189.665C445.904 189.866 445.483 189.982 445.051 190.006C444.62 190.03 444.189 189.96 443.787 189.802C443.385 189.644 443.022 189.401 442.722 189.089L432.224 178.18C430.481 176.819 429.348 174.822 429.074 172.627C428.8 170.432 429.408 168.217 430.763 166.47C432.119 164.722 434.112 163.584 436.305 163.305C438.498 163.026 440.712 163.629 442.461 164.982L455.628 172.35C456.005 172.561 456.332 172.851 456.587 173.2C456.842 173.549 457.019 173.949 457.105 174.372C457.192 174.796 457.186 175.233 457.088 175.654C456.991 176.075 456.804 176.47 456.54 176.812H456.54Z" fill="#B31E6F"/>
                <path d="M464.105 260.064L446.302 173.282C445.456 169.157 443.045 165.521 439.576 163.138C436.107 160.755 431.85 159.811 427.7 160.503L421.763 161.493C419.7 161.837 417.725 162.584 415.951 163.692C414.177 164.8 412.639 166.246 411.423 167.949C409.492 170.654 408.191 173.759 407.617 177.033C407.042 180.308 407.207 183.67 408.102 186.872L417.928 222.068L410.636 259.776C410.554 260.194 410.574 260.626 410.693 261.035C410.812 261.444 411.028 261.818 411.321 262.127C411.614 262.436 411.977 262.67 412.379 262.81C412.781 262.95 413.211 262.991 413.633 262.931C417.284 262.408 423.302 261.662 430.214 261.256L433.959 246.8L435.482 261.026C443.973 260.788 453.19 261.205 460.794 263.182C461.234 263.299 461.696 263.302 462.138 263.191C462.579 263.08 462.985 262.857 463.317 262.545C463.648 262.233 463.895 261.841 464.033 261.407C464.171 260.972 464.195 260.51 464.105 260.064Z" fill="#B31E6F"/>
                <path d="M432.824 135.066C437.041 137.953 442.577 140.922 446.883 137.847C449.711 135.827 450.602 132.088 449.455 128.806C447.393 122.905 441.728 120.307 436.31 118.316C429.267 115.727 421.598 113.667 414.328 115.521C407.057 117.375 400.632 124.42 401.944 131.813C402.999 137.758 408.603 142.705 407.808 148.69C407.007 154.714 400.238 157.885 394.261 158.962C388.285 160.038 381.597 160.384 377.302 164.68C371.823 170.161 373.191 179.956 378.347 185.742C383.502 191.528 391.282 194.151 398.821 195.934C408.81 198.297 419.613 199.538 429.1 195.618C438.586 191.697 445.969 181.143 443.221 171.247C442.06 167.066 439.325 163.534 436.683 160.094C434.04 156.655 431.364 153.058 430.356 148.839C429.516 145.322 430.138 141.239 432.468 138.602C432.891 138.14 433.158 137.556 433.23 136.933C433.301 136.31 433.173 135.681 432.865 135.135L432.824 135.066Z" fill="#2F2E41"/>
                <path d="M108.985 370.13L101.014 368.25L104.464 336.59L116.228 339.364L108.985 370.13Z" fill="#FFB8B8"/>
                <path d="M109.197 378.342L83.4971 372.283L83.5737 371.958C83.8831 370.643 84.4482 369.402 85.2368 368.306C86.0254 367.21 87.022 366.28 88.1697 365.57C89.3174 364.859 90.5937 364.382 91.9258 364.165C93.2579 363.948 94.6196 363.996 95.9332 364.305L95.9339 364.305L111.63 368.006L109.197 378.342Z" fill="#2F2E41"/>
                <path d="M140.045 370.398H131.856L127.96 338.789L140.046 338.79L140.045 370.398Z" fill="#FFB8B8"/>
                <path d="M142.133 378.342L115.729 378.342V378.007C115.729 376.657 115.995 375.319 116.511 374.071C117.028 372.824 117.785 371.69 118.739 370.735C119.693 369.78 120.826 369.022 122.073 368.505C123.32 367.989 124.657 367.723 126.006 367.723H126.007L142.133 367.723L142.133 378.342Z" fill="#2F2E41"/>
                <path d="M184.271 245.392C184.819 244.497 185.165 243.493 185.284 242.45C185.402 241.407 185.291 240.351 184.958 239.355C184.625 238.36 184.077 237.45 183.354 236.689C182.631 235.928 181.751 235.335 180.774 234.952L156.799 174.109L143.461 182.213L171.221 239.471C170.687 241.155 170.788 242.978 171.506 244.592C172.224 246.207 173.509 247.502 175.118 248.232C176.726 248.962 178.547 249.076 180.233 248.552C181.92 248.029 183.357 246.905 184.271 245.392Z" fill="#FFB8B8"/>
                <path d="M139.5 359.053C139.461 359.053 139.42 359.052 139.38 359.051L127.773 358.586C126.989 358.559 126.247 358.224 125.707 357.654C125.167 357.084 124.873 356.324 124.888 355.539L125.779 291.37C125.782 291.112 125.686 290.862 125.511 290.673C125.335 290.484 125.094 290.37 124.836 290.354C124.579 290.339 124.325 290.424 124.129 290.591C123.932 290.758 123.807 290.994 123.78 291.251L117.047 355.491C116.977 356.145 116.695 356.758 116.245 357.237C115.795 357.716 115.2 358.035 114.552 358.144L114.512 358.151L103.615 357.294C103.186 357.359 102.747 357.331 102.33 357.21C101.912 357.09 101.526 356.88 101.197 356.596C100.869 356.312 100.605 355.959 100.426 355.564C100.246 355.168 100.155 354.737 100.157 354.303L100.809 245.496L154.277 248.883L142.488 356.373C142.405 357.109 142.055 357.788 141.504 358.282C140.953 358.776 140.24 359.051 139.5 359.053Z" fill="#2F2E41"/>
                <path d="M129.727 150.51C138.787 150.51 146.132 143.16 146.132 134.093C146.132 125.026 138.787 117.676 129.727 117.676C120.667 117.676 113.322 125.026 113.322 134.093C113.322 143.16 120.667 150.51 129.727 150.51Z" fill="#FFB8B8"/>
                <path d="M63.5552 152.532C63.6371 152.892 63.6906 153.259 63.715 153.628L92.4075 170.193L99.3816 166.175L106.816 175.916L95.1609 184.229C94.2192 184.901 93.0853 185.249 91.9294 185.22C90.7734 185.192 89.6578 184.79 88.7499 184.073L59.163 160.714C57.8278 161.209 56.3737 161.285 54.9942 160.932C53.6147 160.58 52.3751 159.815 51.4404 158.74C50.5056 157.665 49.92 156.331 49.7614 154.915C49.6028 153.499 49.8788 152.069 50.5525 150.813C51.2263 149.558 52.266 148.538 53.5332 147.888C54.8005 147.239 56.2354 146.991 57.6469 147.178C59.0584 147.364 60.3798 147.976 61.4352 148.933C62.4906 149.889 63.23 151.144 63.5552 152.532Z" fill="#FFB8B8"/>
                <path d="M161.895 184.171L146.656 189.816C146.222 189.977 145.759 190.042 145.298 190.007C144.837 189.973 144.389 189.839 143.984 189.615C143.579 189.392 143.228 189.083 142.953 188.712C142.678 188.34 142.486 187.913 142.391 187.46L139.054 171.595C138.246 169.371 138.352 166.916 139.349 164.77C140.346 162.623 142.153 160.96 144.374 160.145C146.595 159.329 149.048 159.429 151.195 160.421C153.343 161.413 155.01 163.216 155.831 165.436L163.599 179.604C163.821 180.009 163.953 180.458 163.987 180.92C164.02 181.381 163.953 181.844 163.792 182.278C163.63 182.711 163.377 183.105 163.049 183.431C162.722 183.758 162.328 184.01 161.895 184.171V184.171Z" fill="#B31E6F"/>
                <path d="M151.618 253.672C151.543 253.672 151.467 253.669 151.391 253.664L101.976 250.046C101.207 249.989 100.49 249.64 99.9716 249.07C99.4532 248.5 99.1733 247.753 99.1898 246.982L100.493 184.882C100.405 181.072 101.096 177.284 102.522 173.75C103.948 170.216 106.08 167.01 108.787 164.329C111.494 161.648 114.719 159.548 118.265 158.157C121.811 156.767 125.603 156.115 129.41 156.242C133.216 156.369 136.956 157.272 140.402 158.895C143.848 160.519 146.926 162.829 149.449 165.685C151.971 168.54 153.885 171.88 155.073 175.501C156.261 179.123 156.698 182.948 156.358 186.744C155.494 196.315 154.806 238.127 154.616 250.713C154.604 251.501 154.283 252.253 153.722 252.806C153.162 253.36 152.406 253.671 151.618 253.672Z" fill="#B31E6F"/>
                <path d="M92.8018 168.535C92.8881 168.112 93.0648 167.712 93.3197 167.363C93.5746 167.014 93.9017 166.724 94.2787 166.513L107.446 159.145C109.195 157.795 111.408 157.194 113.6 157.473C115.791 157.753 117.783 158.891 119.137 160.638C120.492 162.384 121.1 164.597 120.827 166.791C120.554 168.985 119.424 170.982 117.683 172.343L107.185 183.252C106.885 183.564 106.522 183.807 106.12 183.965C105.718 184.123 105.287 184.193 104.855 184.169C104.424 184.146 104.003 184.029 103.621 183.828C103.238 183.627 102.904 183.345 102.64 183.003L93.3668 170.975C93.1027 170.633 92.9155 170.238 92.818 169.817C92.7205 169.396 92.715 168.959 92.8018 168.535Z" fill="#B31E6F"/>
                <path d="M138.205 147.091C135.68 147.072 133.201 146.413 131 145.176C128.798 143.939 126.946 142.164 125.616 140.016C125.471 139.79 124.682 138.629 123.767 137.286C121.198 133.51 120.596 132.612 120.545 132.48C119.849 130.685 117.642 129.992 115.914 129.726C115.591 129.676 115.264 129.633 114.936 129.588C112.501 129.262 109.983 128.924 108.603 126.246C107.59 124.281 105.934 116.277 107.206 114.321C108.8 111.868 111.862 112.665 114.822 113.436C116.717 113.928 118.676 114.438 120.237 114.112C127.002 112.704 134.67 111.107 141.442 115.235C146.832 118.519 150.074 124.721 149.903 131.422C149.719 138.617 146.583 144.297 141.515 146.616L140.459 146.923L139.866 146.996C139.314 147.059 138.76 147.091 138.205 147.091Z" fill="#2F2E41"/>
                <path d="M353.053 57.1482C347.505 57.1482 342.081 55.5016 337.468 52.4168C332.854 49.332 329.259 44.9474 327.135 39.8176C325.012 34.6877 324.457 29.0429 325.539 23.5971C326.621 18.1513 329.293 13.1489 333.217 9.22271C337.14 5.29648 342.138 2.62269 347.58 1.53945C353.022 0.456203 358.662 1.01217 363.788 3.13703C368.914 5.26189 373.296 8.8602 376.378 13.477C379.461 18.0937 381.106 23.5216 381.106 29.0741C381.098 36.5172 378.139 43.6531 372.88 48.9161C367.621 54.1792 360.491 57.1397 353.053 57.1482ZM353.053 2.33687C347.769 2.33687 342.603 3.90498 338.21 6.8429C333.816 9.78082 330.392 13.9566 328.37 18.8422C326.347 23.7278 325.818 29.1037 326.849 34.2903C327.88 39.4768 330.425 44.2409 334.161 47.9801C337.898 51.7194 342.658 54.2659 347.841 55.2976C353.023 56.3292 358.395 55.7997 363.277 53.7761C368.159 51.7524 372.332 48.3254 375.267 43.9285C378.203 39.5316 379.77 34.3622 379.77 29.0741C379.762 21.9854 376.945 15.1893 371.936 10.1769C366.927 5.16438 360.136 2.34487 353.053 2.33687Z" fill="#3F729B" stroke="#3F729B"/>
                <path d="M360.694 15.1859C362.562 15.1915 364.353 15.9368 365.674 17.2592C366.996 18.5815 367.74 20.3734 367.746 22.2435V36.3573C367.74 38.2273 366.996 40.0192 365.674 41.3416C364.353 42.6639 362.562 43.4093 360.694 43.4149H346.59C344.722 43.4093 342.931 42.6639 341.61 41.3416C340.289 40.0192 339.544 38.2273 339.538 36.3573V22.2435C339.544 20.3734 340.289 18.5815 341.61 17.2592C342.931 15.9368 344.722 15.1915 346.59 15.1859H360.694ZM360.694 12.3633H346.59C343.974 12.3709 341.468 13.4143 339.618 15.2656C337.768 17.1168 336.725 19.6254 336.718 22.2435V36.3573C336.725 38.9753 337.768 41.484 339.618 43.3352C341.468 45.1865 343.974 46.2298 346.59 46.2375H360.694C363.31 46.2298 365.816 45.1865 367.666 43.3352C369.516 41.484 370.559 38.9753 370.566 36.3573V22.2435C370.559 19.6254 369.516 17.1168 367.666 15.2656C365.816 13.4143 363.31 12.3709 360.694 12.3633Z" fill="#3F729B"/>
                <path d="M362.809 22.2447C362.25 22.2435 361.714 22.0201 361.319 21.6235C360.924 21.227 360.702 20.6897 360.703 20.1298C360.703 19.5699 360.926 19.0332 361.322 18.6375C361.718 18.2418 362.254 18.0195 362.814 18.0195C363.373 18.0195 363.91 18.2418 364.306 18.6375C364.701 19.0332 364.924 19.5699 364.925 20.1298C364.925 20.6897 364.704 21.227 364.309 21.6235C363.914 22.0201 363.378 22.2435 362.818 22.2447C362.815 22.2447 362.812 22.2447 362.809 22.2447Z" fill="#3F729B"/>
                <path d="M353.642 23.6546C354.758 23.6546 355.849 23.9858 356.776 24.6061C357.704 25.2265 358.427 26.1083 358.854 27.14C359.281 28.1716 359.393 29.3068 359.175 30.402C358.958 31.4972 358.42 32.5033 357.631 33.2929C356.842 34.0825 355.837 34.6202 354.743 34.838C353.648 35.0559 352.514 34.9441 351.483 34.5167C350.452 34.0894 349.571 33.3658 348.951 32.4373C348.331 31.5088 348 30.4172 348 29.3006C348 27.8032 348.595 26.3671 349.653 25.3083C350.711 24.2495 352.146 23.6546 353.642 23.6546ZM353.642 20.832C351.968 20.832 350.332 21.3287 348.941 22.2592C347.549 23.1897 346.464 24.5124 345.824 26.0598C345.183 27.6072 345.016 29.3099 345.342 30.9527C345.669 32.5954 346.475 34.1044 347.658 35.2887C348.842 36.4731 350.35 37.2796 351.991 37.6064C353.633 37.9331 355.334 37.7654 356.88 37.1245C358.427 36.4835 359.748 35.3981 360.678 34.0054C361.608 32.6128 362.104 30.9755 362.104 29.3006C362.104 27.0546 361.213 24.9006 359.626 23.3124C358.039 21.7243 355.886 20.8321 353.642 20.832V20.832Z" fill="#3F729B"/>
                <path d="M509.053 147.148C503.505 147.148 498.081 145.502 493.468 142.417C488.854 139.332 485.259 134.947 483.135 129.818C481.012 124.688 480.457 119.043 481.539 113.597C482.621 108.151 485.293 103.149 489.217 99.2227C493.14 95.2965 498.138 92.6227 503.58 91.5394C509.022 90.4562 514.662 91.0122 519.788 93.137C524.914 95.2619 529.296 98.8602 532.378 103.477C535.461 108.094 537.106 113.522 537.106 119.074C537.098 126.517 534.139 133.653 528.88 138.916C523.621 144.179 516.491 147.14 509.053 147.148ZM509.053 92.3369C503.769 92.3369 498.603 93.905 494.21 96.8429C489.816 99.7808 486.392 103.957 484.37 108.842C482.347 113.728 481.818 119.104 482.849 124.29C483.88 129.477 486.425 134.241 490.161 137.98C493.898 141.719 498.658 144.266 503.841 145.298C509.023 146.329 514.395 145.8 519.277 143.776C524.159 141.752 528.332 138.325 531.268 133.928C534.203 129.532 535.77 124.362 535.77 119.074C535.762 111.985 532.945 105.189 527.936 100.177C522.927 95.1644 516.136 92.3449 509.053 92.3369Z" fill="#0E76A8" stroke="#0E76A8"/>
                <path d="M525.335 108.023L501.674 100.738C501.374 100.63 501.056 100.581 500.738 100.596C500.42 100.611 500.107 100.689 499.819 100.825C499.531 100.961 499.272 101.153 499.058 101.389C498.844 101.625 498.679 101.901 498.572 102.202L491.277 125.933C491.097 126.577 491.17 127.265 491.482 127.856C491.793 128.447 492.319 128.896 492.952 129.11L516.606 136.393C517.236 136.56 517.906 136.472 518.472 136.148C519.037 135.824 519.453 135.29 519.628 134.662L526.923 110.931C527.019 110.636 527.054 110.324 527.026 110.015C526.997 109.706 526.905 109.406 526.757 109.134C526.608 108.861 526.405 108.622 526.161 108.431C525.916 108.24 525.635 108.101 525.335 108.023ZM500.769 126.348L496.708 125.097L500.593 112.459L504.654 113.71L500.769 126.348ZM503.355 111.207L503.326 111.198C502.742 111.014 502.256 110.606 501.972 110.064C501.689 109.522 501.632 108.889 501.814 108.305C501.995 107.721 502.401 107.233 502.942 106.947C503.483 106.662 504.114 106.602 504.699 106.782C505.283 106.962 505.772 107.367 506.059 107.907C506.346 108.447 506.408 109.079 506.23 109.665C506.052 110.25 505.65 110.741 505.111 111.03C504.572 111.319 503.94 111.383 503.355 111.207ZM515.613 130.918L511.551 129.667L513.676 122.757C514.185 121.102 513.941 119.789 512.472 119.336C512.011 119.198 511.519 119.207 511.063 119.361C510.608 119.515 510.211 119.806 509.928 120.195C509.721 120.483 509.569 120.807 509.481 121.15L507.268 128.348L503.206 127.098L507.091 114.46L511.153 115.711L510.612 117.469C511.179 116.943 511.877 116.579 512.632 116.416C513.388 116.253 514.174 116.297 514.907 116.543C517.573 117.364 519.049 119.743 517.883 123.535L515.613 130.918Z" fill="#0E76A8"/>
                <path d="M41.053 150.148C35.5047 150.148 30.0809 148.502 25.4676 145.417C20.8543 142.332 17.2587 137.947 15.1354 132.818C13.0121 127.688 12.4566 122.043 13.539 116.597C14.6215 111.151 17.2933 106.149 21.2165 102.223C25.1398 98.2965 30.1384 95.6227 35.5801 94.5394C41.0219 93.4562 46.6624 94.0122 51.7884 96.137C56.9144 98.2619 61.2957 101.86 64.3782 106.477C67.4607 111.094 69.106 116.522 69.106 122.074C69.0976 129.517 66.1393 136.653 60.8802 141.916C55.621 147.179 48.4905 150.14 41.053 150.148ZM41.053 95.3369C35.7689 95.3369 30.6034 96.905 26.2098 99.8429C21.8161 102.781 18.3917 106.957 16.3696 111.842C14.3474 116.728 13.8183 122.104 14.8492 127.29C15.8801 132.477 18.4247 137.241 22.1611 140.98C25.8976 144.719 30.6581 147.266 35.8407 148.298C41.0234 149.329 46.3953 148.8 51.2772 146.776C56.1591 144.752 60.3318 141.325 63.2675 136.928C66.2032 132.532 67.7701 127.362 67.7701 122.074C67.7621 114.985 64.9447 108.189 59.936 103.177C54.9273 98.1644 48.1364 95.3449 41.053 95.3369Z" fill="#3B5998" stroke="#3B5998"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.3918 122.185C59.3912 118.678 58.3864 115.244 56.4964 112.291C54.6065 109.338 51.9105 106.988 48.7277 105.52C45.5448 104.053 42.0084 103.528 38.537 104.009C35.0657 104.491 31.8048 105.957 29.1404 108.235C26.4759 110.513 24.5196 113.508 23.5029 116.864C22.4862 120.221 22.4518 123.798 23.4037 127.173C24.3556 130.549 26.2539 133.58 28.874 135.909C31.4941 138.239 34.7261 139.768 38.1876 140.316V127.492H33.53V122.185H38.1876V118.141C38.1876 113.542 40.9261 111 45.1146 111C46.4901 111.019 47.8623 111.139 49.2203 111.359V115.876H46.9067C44.6299 115.876 43.9176 117.29 43.9176 118.743V122.186H49.0034L48.1912 127.493H43.9176V140.317C48.2317 139.633 52.1603 137.432 54.9969 134.108C57.8336 130.784 59.3919 126.556 59.3918 122.185L59.3918 122.185Z" fill="#3B5998"/>
                <path d="M197.053 56.1482C191.505 56.1482 186.081 54.5016 181.468 51.4168C176.854 48.332 173.259 43.9474 171.135 38.8176C169.012 33.6877 168.457 28.0429 169.539 22.5971C170.621 17.1513 173.293 12.1489 177.217 8.22271C181.14 4.29648 186.138 1.62269 191.58 0.539447C197.022 -0.543797 202.662 0.0121659 207.788 2.13703C212.914 4.26189 217.296 7.8602 220.378 12.477C223.461 17.0937 225.106 22.5216 225.106 28.0741C225.098 35.5172 222.139 42.653 216.88 47.9161C211.621 53.1792 204.491 56.1397 197.053 56.1482ZM197.053 1.33687C191.769 1.33687 186.603 2.90498 182.21 5.8429C177.816 8.78082 174.392 12.9566 172.37 17.8422C170.347 22.7278 169.818 28.1037 170.849 33.2903C171.88 38.4768 174.425 43.2409 178.161 46.9801C181.898 50.7194 186.658 53.2659 191.841 54.2975C197.023 55.3292 202.395 54.7997 207.277 52.776C212.159 50.7524 216.332 47.3254 219.268 42.9285C222.203 38.5316 223.77 33.3622 223.77 28.0741C223.762 20.9854 220.945 14.1893 215.936 9.17686C210.927 4.1644 204.136 1.34488 197.053 1.33687Z" fill="#00ACEE" stroke="#00ACEE"/>
                <path d="M213.083 20.386L216.423 19.7176C216.423 19.7176 213.618 22.8592 213.083 23.0598C213.033 23.7273 213.033 24.3976 213.083 25.0651C206.671 52.6044 183.026 40.439 183.026 40.439C191.643 40.6395 192.377 37.0968 192.377 37.0968C187.368 36.3615 186.366 33.0862 186.366 33.0862C186.816 33.3235 187.337 33.3865 187.83 33.2632C188.323 33.1398 188.753 32.8388 189.038 32.4178C183.628 31.0141 184.362 25.7335 184.362 25.7335C185.327 26.4302 186.454 26.8675 187.635 27.0035C187.034 26.2682 181.958 20.1855 185.03 17.0439C185.03 17.0439 188.771 23.7282 198.589 24.3298L199.257 24.1961C199.144 23.7147 199.099 23.2196 199.124 22.7256C199.124 20.8641 199.862 19.0789 201.178 17.7627C202.493 16.4465 204.277 15.707 206.137 15.707C210.812 15.707 211.814 18.3808 211.814 18.3808L215.154 16.3755C215.087 16.3755 214.753 19.7176 213.083 20.386Z" fill="#00ACEE"/>
                <path d="M539.686 378.333C539.686 378.51 539.615 378.679 539.49 378.805C539.365 378.93 539.195 379 539.018 379.001H0.667929C0.490783 379.001 0.320892 378.931 0.195631 378.805C0.0703703 378.68 0 378.51 0 378.333C0 378.155 0.0703703 377.985 0.195631 377.86C0.320892 377.734 0.490783 377.664 0.667929 377.664H539.018C539.195 377.665 539.365 377.735 539.49 377.86C539.615 377.986 539.686 378.155 539.686 378.333Z" fill="#EE5A5A" stroke="#EE5A5A" stroke-width="2"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="540" height="379" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div className={classes.infoContainer}>
                <Typography className={classes.infoTitle}>
                    ANALYTICA
                </Typography>
                <Typography className={classes.infoDesc}>
                    A Single Platform to access all your social data. WebApp allows you
                    to precisely analyse your data in depth by visualizing your data in the
                    form of various charts. 
                </Typography>
            </div>
            <div className={classes.btnContainer}>
                <div className={classes.btnSubContainer}>
                    <Typography className={classes.btnDesc}>
                        New to Analytica... Join us Now 
                    </Typography>
                    <Button className={classes.loginButton} variant="contained" color="secondary" onClick={()=>{history.push("/Register");window.location.reload(false);}}>
                        Create New Account
                    </Button>
                </div>
                <div className={classes.btnSubContainer}>
                    <Typography className={classes.btnDesc}>
                        Already a Member of Analytica Family?
                    </Typography>
                    <Button className={classes.loginButton} variant="contained" color="secondary" onClick={()=>{history.push("/Login");window.location.reload(false);}}>
                        Sign In
                    </Button>
                </div>						
            </div>
        </div>
    )
}

export default Page1
