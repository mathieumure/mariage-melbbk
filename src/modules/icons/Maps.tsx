type Props = {
  active: 'B' | 'C' | 'E';
};
export const Map = ({ active }: Props) => {
  return (
    <svg viewBox="0 0 1126 850" xmlns="http://www.w3.org/2000/svg" fill="var(--green)" style={{ backgroundColor: 'var(--green)' }}>
      <g clip-path="url(#clip0_25_15)">
        <rect width="1126" height="850" fill="#99C46B" />
        <path
          d="M856 702L1064 422M1064 422L1126.5 354.5M1064 422L1126.5 445M1064 422L1043.5 387.5L1064 133.5M1020.5 488L931.5 464L868 482.5L823 542.5"
          stroke="#27363D"
          strokeWidth="13"
        />
        <path d="M999 228.5L1003 170L1031 171.5L1027 231L999 228.5Z" fill="#F9B038" />
        <path d="M1021.5 275L997.5 266.5L986 309L1010 316.5L1021.5 275Z" fill="#F9B038" />
        <path d="M913 96L904 122L979 148L987.5 122L913 96Z" fill="#F9B038" />
        <path d="M877.5 523L852 533L872 591.5L897.5 581L877.5 523Z" fill="#F9B038" stroke="#90B2D4" />
        <path d="M838 597L812.5 607L832.5 665.5L858 655L838 597Z" fill="#F9B038" stroke="#90B2D4" />
        {active === 'B' && <line x1="757" y1="494" x2="757" y2="631" stroke="#F14993" strokeWidth="10" strokeLinecap="round" strokeDasharray="20 20" />}
        {active === 'B' && <line x1="831.884" y1="634.881" x2="756.881" y2="633.116" stroke="#F14993" strokeWidth="10" strokeLinecap="round" strokeDasharray="20 20" />}
        {active === 'C' && <line x1="757" y1="494" x2="757" y2="557" stroke="#F14993" strokeWidth="10" strokeLinecap="round" strokeDasharray="20 20" />}
        {active === 'C' && <line x1="863.915" y1="559.914" x2="756.914" y2="558.085" stroke="#F14993" strokeWidth="10" strokeLinecap="round" strokeDasharray="20 20" />}
        {active === 'E' && <line x1="938.064" y1="131.763" x2="769.763" y2="447.936" stroke="#F14993" strokeWidth="10" strokeLinecap="round" strokeDasharray="20 20" />}
        <path d="M845 470.662L688.753 424L674 470.662L832.259 518L845 470.662Z" fill="#F9B038" stroke="#90B2D4" />
        {active === 'E' && <circle cx="944" cy="122" r="13" fill="#F14993" />}
        {active === 'C' && <circle cx="875" cy="559" r="13" fill="#F14993" />}
        {active === 'B' && <circle cx="836" cy="633" r="13" fill="#F14993" />}
        <path
          d="M1006.91 290.156C1006.81 289.811 1006.67 289.505 1006.49 289.24C1006.31 288.97 1006.09 288.743 1005.83 288.558C1005.57 288.369 1005.28 288.224 1004.95 288.125C1004.62 288.026 1004.26 287.976 1003.86 287.976C1003.12 287.976 1002.47 288.161 1001.9 288.53C1001.34 288.899 1000.91 289.437 1000.6 290.142C1000.28 290.843 1000.13 291.7 1000.13 292.713C1000.13 293.726 1000.28 294.588 1000.59 295.298C1000.9 296.009 1001.33 296.551 1001.89 296.925C1002.46 297.294 1003.12 297.479 1003.89 297.479C1004.59 297.479 1005.18 297.356 1005.67 297.109C1006.17 296.858 1006.55 296.506 1006.81 296.051C1007.07 295.597 1007.21 295.059 1007.21 294.439L1007.83 294.531H1004.08V292.216H1010.17V294.048C1010.17 295.327 1009.9 296.425 1009.36 297.344C1008.82 298.258 1008.08 298.963 1007.13 299.46C1006.18 299.953 1005.1 300.199 1003.88 300.199C1002.51 300.199 1001.31 299.898 1000.28 299.297C999.25 298.691 998.446 297.831 997.868 296.719C997.295 295.601 997.009 294.276 997.009 292.741C997.009 291.562 997.179 290.511 997.52 289.588C997.866 288.66 998.348 287.874 998.969 287.23C999.589 286.586 1000.31 286.096 1001.13 285.76C1001.96 285.424 1002.85 285.256 1003.81 285.256C1004.64 285.256 1005.4 285.376 1006.11 285.618C1006.82 285.855 1007.45 286.191 1008 286.626C1008.56 287.062 1009.01 287.58 1009.36 288.182C1009.71 288.778 1009.93 289.437 1010.03 290.156H1006.91Z"
          fill="white"
        />
        <path d="M1010.26 208V193.455H1019.89V195.99H1013.34V199.456H1019.26V201.991H1013.34V208H1010.26Z" fill="white" />
        <path d="M939.264 129V114.455H949.065V116.99H942.339V120.456H948.561V122.991H942.339V126.464H949.094V129H939.264Z" fill="white" />
        <path
          d="M881.098 556.547H877.987C877.93 556.144 877.814 555.787 877.639 555.474C877.464 555.157 877.239 554.887 876.964 554.665C876.69 554.442 876.373 554.272 876.013 554.153C875.658 554.035 875.272 553.976 874.855 553.976C874.102 553.976 873.446 554.163 872.888 554.537C872.329 554.906 871.896 555.446 871.588 556.156C871.28 556.862 871.126 557.719 871.126 558.727C871.126 559.764 871.28 560.635 871.588 561.341C871.901 562.046 872.336 562.579 872.895 562.939C873.454 563.299 874.1 563.479 874.834 563.479C875.246 563.479 875.627 563.424 875.977 563.315C876.332 563.206 876.647 563.048 876.922 562.839C877.196 562.626 877.424 562.368 877.604 562.065C877.788 561.762 877.916 561.417 877.987 561.028L881.098 561.043C881.018 561.71 880.816 562.354 880.494 562.974C880.177 563.59 879.749 564.142 879.209 564.629C878.674 565.112 878.035 565.496 877.291 565.78C876.553 566.059 875.717 566.199 874.784 566.199C873.487 566.199 872.327 565.905 871.304 565.318C870.286 564.731 869.481 563.881 868.889 562.768C868.302 561.656 868.009 560.309 868.009 558.727C868.009 557.141 868.307 555.792 868.903 554.679C869.5 553.566 870.31 552.719 871.332 552.136C872.355 551.549 873.506 551.256 874.784 551.256C875.627 551.256 876.408 551.374 877.128 551.611C877.852 551.848 878.494 552.193 879.053 552.648C879.611 553.098 880.066 553.649 880.416 554.303C880.771 554.956 880.999 555.704 881.098 556.547Z"
          fill="white"
        />
        <path
          d="M831.264 640V625.455H837.088C838.158 625.455 839.051 625.613 839.766 625.93C840.481 626.248 841.018 626.688 841.378 627.251C841.738 627.81 841.918 628.454 841.918 629.183C841.918 629.751 841.804 630.251 841.577 630.682C841.349 631.108 841.037 631.458 840.639 631.733C840.246 632.003 839.796 632.195 839.29 632.308V632.45C839.844 632.474 840.362 632.63 840.845 632.919C841.333 633.208 841.728 633.613 842.031 634.134C842.334 634.65 842.486 635.265 842.486 635.98C842.486 636.752 842.294 637.441 841.911 638.047C841.532 638.648 840.971 639.124 840.227 639.474C839.484 639.825 838.568 640 837.479 640H831.264ZM834.339 637.486H836.847C837.704 637.486 838.329 637.322 838.722 636.996C839.115 636.664 839.311 636.224 839.311 635.675C839.311 635.272 839.214 634.917 839.02 634.609C838.826 634.302 838.549 634.06 838.189 633.885C837.834 633.71 837.41 633.622 836.918 633.622H834.339V637.486ZM834.339 631.541H836.619C837.041 631.541 837.415 631.468 837.741 631.321C838.073 631.17 838.333 630.956 838.523 630.682C838.717 630.407 838.814 630.078 838.814 629.695C838.814 629.169 838.627 628.745 838.253 628.423C837.884 628.101 837.358 627.94 836.676 627.94H834.339V631.541Z"
          fill="white"
        />
        <path
          d="M758.349 463.299L755.19 462.359L764.153 449.851L767.951 450.982L768.607 466.353L765.448 465.413L765.158 453.618L765.049 453.586L758.349 463.299ZM759.782 457.761L767.243 459.982L766.558 462.283L759.098 460.062L759.782 457.761ZM705.672 466.575C706.175 464.887 706.862 463.4 707.734 462.113C708.611 460.828 709.694 459.718 710.985 458.783L713.756 459.608C713.268 459.952 712.776 460.403 712.278 460.961C711.783 461.515 711.306 462.144 710.85 462.848C710.393 463.552 709.978 464.298 709.606 465.086C709.234 465.87 708.928 466.665 708.688 467.473C708.367 468.549 708.153 469.668 708.044 470.831C707.94 471.991 707.937 473.097 708.034 474.148C708.136 475.201 708.334 476.097 708.627 476.837L705.857 476.012C705.287 474.523 704.987 473.001 704.956 471.446C704.929 469.892 705.168 468.268 705.672 466.575ZM711.212 474.308L714.324 463.853L717.136 464.69L716.593 466.514L716.702 466.546C717.085 465.954 717.551 465.559 718.099 465.362C718.648 465.16 719.216 465.146 719.801 465.32C719.946 465.363 720.1 465.419 720.263 465.487C720.425 465.555 720.565 465.624 720.683 465.694L719.917 468.267C719.793 468.185 719.615 468.093 719.384 467.99C719.153 467.886 718.938 467.805 718.738 467.745C718.312 467.618 717.903 467.598 717.511 467.684C717.126 467.767 716.787 467.943 716.495 468.211C716.207 468.481 716 468.83 715.873 469.256L714.112 475.172L711.212 474.308ZM723.273 478.121C722.197 477.801 721.336 477.307 720.69 476.641C720.05 475.971 719.64 475.172 719.462 474.245C719.285 473.313 719.36 472.295 719.689 471.193C720.009 470.117 720.499 469.235 721.158 468.547C721.817 467.859 722.593 467.401 723.486 467.173C724.384 466.946 725.345 466.985 726.371 467.291C727.061 467.496 727.67 467.798 728.198 468.198C728.732 468.594 729.156 469.078 729.47 469.651C729.788 470.225 729.973 470.882 730.024 471.624C730.076 472.361 729.97 473.174 729.705 474.063L729.468 474.86L720.639 472.231L721.174 470.434L727.273 472.25C727.398 471.832 727.417 471.436 727.331 471.059C727.246 470.683 727.069 470.356 726.801 470.079C726.538 469.798 726.196 469.595 725.774 469.469C725.334 469.338 724.913 469.324 724.512 469.427C724.117 469.527 723.773 469.719 723.481 470.002C723.191 470.281 722.982 470.627 722.854 471.038L722.346 472.747C722.192 473.264 722.154 473.74 722.232 474.173C722.315 474.608 722.504 474.98 722.797 475.289C723.09 475.599 723.479 475.826 723.965 475.971C724.287 476.067 724.596 476.109 724.89 476.098C725.185 476.087 725.455 476.019 725.699 475.894C725.944 475.769 726.155 475.59 726.334 475.357L728.963 476.332C728.635 476.936 728.188 477.416 727.623 477.771C727.064 478.123 726.413 478.335 725.671 478.405C724.934 478.472 724.135 478.378 723.273 478.121ZM725.622 465.749L727.987 463.081L730.669 463.879L727.671 466.359L725.622 465.749ZM734.688 481.519C733.617 481.2 732.764 480.699 732.127 480.016C731.497 479.329 731.096 478.518 730.925 477.583C730.758 476.649 730.832 475.653 731.147 474.596C731.466 473.525 731.952 472.647 732.605 471.962C733.265 471.274 734.045 470.818 734.947 470.592C735.851 470.362 736.831 470.404 737.888 470.719C738.801 470.991 739.55 471.394 740.137 471.929C740.723 472.465 741.127 473.091 741.348 473.809C741.569 474.527 741.58 475.296 741.38 476.116L738.644 475.301C738.722 474.756 738.643 474.276 738.406 473.86C738.175 473.44 737.794 473.151 737.263 472.993C736.814 472.86 736.385 472.865 735.976 473.01C735.573 473.152 735.21 473.427 734.886 473.834C734.562 474.242 734.303 474.775 734.107 475.433C733.908 476.1 733.83 476.694 733.872 477.215C733.919 477.738 734.074 478.172 734.337 478.517C734.6 478.862 734.956 479.102 735.405 479.235C735.736 479.334 736.054 479.354 736.358 479.297C736.666 479.24 736.945 479.108 737.194 478.901C737.45 478.69 737.659 478.409 737.823 478.058L740.56 478.873C740.276 479.658 739.849 480.296 739.278 480.788C738.713 481.277 738.039 481.59 737.257 481.728C736.475 481.866 735.619 481.796 734.688 481.519ZM745.98 484.88C744.904 484.56 744.043 484.067 743.397 483.4C742.756 482.73 742.347 481.932 742.169 481.004C741.992 480.072 742.067 479.055 742.395 477.952C742.716 476.876 743.205 475.995 743.865 475.307C744.524 474.619 745.3 474.16 746.193 473.932C747.09 473.705 748.052 473.745 749.078 474.05C749.767 474.255 750.376 474.558 750.905 474.957C751.439 475.353 751.863 475.837 752.177 476.41C752.495 476.984 752.679 477.642 752.73 478.383C752.783 479.12 752.677 479.933 752.412 480.822L752.175 481.619L743.346 478.991L743.881 477.194L749.98 479.009C750.104 478.592 750.124 478.195 750.038 477.819C749.952 477.442 749.776 477.116 749.507 476.838C749.245 476.558 748.903 476.354 748.481 476.229C748.041 476.098 747.62 476.084 747.219 476.187C746.824 476.286 746.48 476.478 746.188 476.762C745.898 477.041 745.689 477.386 745.561 477.798L745.052 479.506C744.898 480.024 744.861 480.499 744.939 480.932C745.022 481.367 745.21 481.739 745.503 482.049C745.797 482.358 746.186 482.585 746.672 482.73C746.994 482.826 747.302 482.868 747.597 482.857C747.892 482.846 748.161 482.778 748.406 482.653C748.651 482.529 748.862 482.35 749.04 482.116L751.67 483.091C751.342 483.695 750.895 484.175 750.33 484.53C749.771 484.883 749.12 485.094 748.377 485.164C747.641 485.232 746.842 485.137 745.98 484.88ZM751.565 490.589L755.844 476.212L758.703 477.063L758.18 478.82L758.31 478.858C758.52 478.615 758.789 478.383 759.116 478.165C759.449 477.943 759.84 477.792 760.288 477.713C760.742 477.631 761.262 477.677 761.848 477.851C762.61 478.078 763.254 478.487 763.78 479.079C764.306 479.665 764.644 480.415 764.792 481.329C764.941 482.238 764.837 483.291 764.481 484.489C764.134 485.656 763.652 486.584 763.036 487.275C762.427 487.963 761.738 488.418 760.971 488.639C760.209 488.857 759.431 488.848 758.637 488.611C758.075 488.444 757.623 488.208 757.284 487.905C756.949 487.602 756.699 487.273 756.533 486.918C756.368 486.558 756.264 486.213 756.218 485.883L756.13 485.857L754.464 491.452L751.565 490.589ZM757.126 482.285C756.941 482.907 756.866 483.475 756.901 483.989C756.935 484.503 757.078 484.938 757.327 485.294C757.579 485.646 757.938 485.891 758.405 486.03C758.877 486.171 759.315 486.16 759.719 485.999C760.124 485.833 760.479 485.543 760.785 485.131C761.097 484.714 761.343 484.202 761.524 483.594C761.704 482.991 761.778 482.435 761.746 481.926C761.715 481.418 761.574 480.986 761.324 480.63C761.075 480.274 760.711 480.025 760.235 479.883C759.763 479.743 759.327 479.749 758.925 479.901C758.529 480.055 758.176 480.335 757.867 480.742C757.559 481.149 757.312 481.664 757.126 482.285ZM773.536 481.479L772.887 483.657L766.591 481.783L767.239 479.605L773.536 481.479ZM769.414 477.525L772.314 478.388L769.412 488.136C769.333 488.404 769.311 488.625 769.349 488.799C769.387 488.968 769.47 489.104 769.598 489.206C769.73 489.31 769.894 489.391 770.089 489.449C770.225 489.489 770.364 489.519 770.507 489.536C770.652 489.55 770.762 489.56 770.839 489.568L770.652 491.862C770.494 491.864 770.274 491.855 769.993 491.836C769.711 491.821 769.38 491.765 768.999 491.666C768.292 491.485 767.707 491.21 767.244 490.84C766.786 490.471 766.478 490.019 766.321 489.483C766.165 488.948 766.191 488.338 766.399 487.654L769.414 477.525ZM772.312 492.497L775.425 482.041L778.324 482.904L775.212 493.36L772.312 492.497ZM777.283 481.127C776.851 480.999 776.524 480.746 776.301 480.368C776.083 479.987 776.034 479.595 776.155 479.191C776.274 478.791 776.528 478.494 776.917 478.299C777.312 478.1 777.725 478.065 778.156 478.193C778.587 478.321 778.911 478.576 779.129 478.957C779.353 479.335 779.405 479.723 779.286 480.123C779.166 480.527 778.908 480.828 778.513 481.026C778.124 481.222 777.714 481.255 777.283 481.127ZM782.198 495.662C781.141 495.347 780.293 494.85 779.656 494.172C779.024 493.489 778.619 492.682 778.442 491.75C778.267 490.814 778.338 489.81 778.657 488.739C778.979 487.659 779.468 486.777 780.126 486.094C780.786 485.406 781.565 484.951 782.466 484.73C783.373 484.506 784.355 484.551 785.412 484.866C786.469 485.181 787.314 485.679 787.946 486.361C788.584 487.04 788.99 487.848 789.166 488.785C789.343 489.717 789.271 490.723 788.949 491.803C788.63 492.874 788.141 493.753 787.482 494.441C786.824 495.125 786.042 495.579 785.135 495.803C784.235 496.024 783.256 495.977 782.198 495.662ZM782.881 493.42C783.362 493.563 783.804 493.546 784.207 493.37C784.612 493.189 784.967 492.885 785.272 492.457C785.581 492.03 785.827 491.513 786.008 490.905C786.189 490.297 786.266 489.73 786.24 489.203C786.219 488.678 786.088 488.229 785.848 487.856C785.609 487.484 785.248 487.226 784.767 487.082C784.282 486.938 783.832 486.955 783.418 487.133C783.009 487.312 782.65 487.615 782.34 488.042C782.035 488.47 781.792 488.988 781.611 489.596C781.43 490.204 781.35 490.771 781.371 491.296C781.397 491.822 781.533 492.272 781.777 492.647C782.027 493.017 782.395 493.275 782.881 493.42ZM793.99 492.37L792.191 498.414L789.291 497.551L792.403 487.095L795.167 487.918L794.618 489.763L794.74 489.799C795.153 489.26 795.684 488.895 796.334 488.703C796.985 488.506 797.699 488.524 798.475 488.755C799.201 488.971 799.787 489.318 800.232 489.796C800.678 490.275 800.962 490.854 801.086 491.533C801.211 492.207 801.153 492.951 800.911 493.763L798.93 500.42L796.03 499.557L797.858 493.417C798.053 492.779 798.038 492.231 797.813 491.774C797.59 491.312 797.188 490.995 796.607 490.822C796.217 490.706 795.847 490.687 795.497 490.766C795.152 490.846 794.848 491.022 794.584 491.294C794.326 491.563 794.128 491.922 793.99 492.37ZM807.766 496.967C807.262 498.66 806.572 500.149 805.695 501.434C804.823 502.721 803.742 503.831 802.451 504.766L799.68 503.941C800.168 503.597 800.66 503.146 801.158 502.588C801.655 502.029 802.131 501.401 802.586 500.701C803.043 499.997 803.458 499.251 803.831 498.463C804.203 497.675 804.51 496.877 804.751 496.069C805.071 494.994 805.282 493.876 805.386 492.716C805.495 491.553 805.498 490.447 805.395 489.399C805.298 488.348 805.103 487.452 804.809 486.713L807.579 487.537C808.149 489.026 808.447 490.547 808.474 492.101C808.504 493.657 808.269 495.279 807.766 496.967Z"
          fill="white"
        />
        <path
          d="M361 78.5L345 0H1.5V850H622.5L630.5 777L662 756.5L677.5 702.5L630.5 640L580 613.5H518L449 619.5L397 597L380.5 558.5V488.5L375 446L352 405V353.5L413.5 288L493 245.5H568L604 217V115.5L555 78.5L449 124L361 78.5Z"
          fill="#83B3C9"
          stroke="#90B2D4"
        />
        <rect x="742" y="189" width="292.927" height="121.966" transform="rotate(30.8874 742 189)" fill="#27363D" />
        <path
          d="M806.683 304.34L813.704 291.601L818.73 294.371C819.696 294.903 820.417 295.542 820.894 296.285C821.373 297.025 821.611 297.819 821.609 298.666C821.613 299.512 821.382 300.358 820.916 301.204C820.45 302.05 819.856 302.696 819.135 303.142C818.413 303.587 817.607 303.8 816.716 303.779C815.828 303.76 814.895 303.481 813.917 302.942L810.713 301.177L811.903 299.018L814.671 300.544C815.189 300.829 815.666 300.975 816.1 300.982C816.54 300.987 816.931 300.876 817.273 300.648C817.622 300.418 817.911 300.094 818.142 299.675C818.375 299.252 818.493 298.836 818.497 298.427C818.507 298.017 818.39 297.63 818.146 297.269C817.904 296.903 817.522 296.576 817 296.288L815.184 295.287L809.376 305.824L806.683 304.34ZM820.343 312.103C819.733 311.767 819.248 311.362 818.888 310.888C818.53 310.409 818.327 309.884 818.28 309.312C818.24 308.738 818.393 308.136 818.74 307.506C819.033 306.975 819.376 306.583 819.77 306.33C820.164 306.077 820.589 305.932 821.046 305.898C821.503 305.863 821.976 305.908 822.465 306.031C822.958 306.157 823.453 306.327 823.951 306.542C824.539 306.79 825.016 306.983 825.384 307.121C825.753 307.254 826.044 307.311 826.254 307.292C826.465 307.273 826.626 307.162 826.738 306.959L826.759 306.921C826.976 306.528 827.019 306.154 826.889 305.801C826.763 305.451 826.475 305.151 826.023 304.902C825.546 304.639 825.108 304.536 824.709 304.592C824.313 304.644 823.983 304.802 823.718 305.067L821.377 303.517C821.821 303.005 822.342 302.639 822.94 302.417C823.54 302.191 824.192 302.122 824.894 302.212C825.602 302.3 826.338 302.554 827.101 302.974C827.632 303.267 828.106 303.609 828.522 304.001C828.943 304.395 829.27 304.827 829.503 305.296C829.741 305.767 829.856 306.269 829.85 306.801C829.846 307.328 829.687 307.876 829.374 308.444L825.823 314.888L823.31 313.503L824.04 312.178L823.965 312.137C823.647 312.351 823.297 312.501 822.914 312.588C822.533 312.67 822.127 312.676 821.696 312.606C821.266 312.531 820.815 312.364 820.343 312.103ZM822.109 310.693C822.499 310.908 822.886 311.021 823.269 311.032C823.654 311.039 824.005 310.956 824.321 310.785C824.638 310.613 824.888 310.359 825.073 310.023L825.632 309.009C825.52 309.017 825.378 309.004 825.208 308.97C825.044 308.934 824.863 308.885 824.664 308.824C824.467 308.759 824.272 308.692 824.077 308.623C823.885 308.549 823.711 308.483 823.555 308.424C823.218 308.298 822.907 308.221 822.62 308.192C822.333 308.164 822.078 308.199 821.856 308.298C821.636 308.393 821.457 308.565 821.32 308.814C821.121 309.175 821.1 309.523 821.256 309.857C821.419 310.19 821.703 310.469 822.109 310.693ZM827.878 316.021L833.144 306.467L835.713 307.883L834.794 309.55L834.894 309.605C835.395 309.108 835.934 308.821 836.511 308.744C837.091 308.664 837.648 308.771 838.183 309.066C838.316 309.139 838.454 309.226 838.598 309.327C838.743 309.428 838.865 309.525 838.965 309.618L837.669 311.97C837.565 311.864 837.412 311.736 837.208 311.585C837.004 311.435 836.811 311.31 836.628 311.209C836.239 310.995 835.843 310.888 835.443 310.889C835.049 310.888 834.68 310.987 834.337 311.188C833.999 311.39 833.722 311.686 833.507 312.076L830.528 317.481L827.878 316.021ZM838.962 318.545L840.72 315.37L841.105 315.582L846.164 313.643L849.206 315.319L842.448 317.855L841.82 317.509L838.962 318.545ZM835.046 319.971L842.066 307.232L844.716 308.692L837.695 321.431L835.046 319.971ZM841.017 323.262L840.499 317.551L843.297 316.653L844.121 324.973L841.017 323.262ZM845.24 325.59L850.506 316.035L853.156 317.496L847.89 327.05L845.24 325.59ZM852.516 315.537C852.122 315.32 851.856 315.003 851.718 314.587C851.586 314.168 851.622 313.775 851.826 313.405C852.027 313.041 852.338 312.804 852.76 312.696C853.188 312.586 853.599 312.639 853.993 312.857C854.387 313.074 854.65 313.391 854.782 313.81C854.92 314.227 854.888 314.617 854.687 314.982C854.484 315.351 854.168 315.591 853.739 315.701C853.318 315.809 852.91 315.755 852.516 315.537ZM855.707 324.157L852.663 329.68L850.013 328.22L855.278 318.666L857.804 320.057L856.875 321.743L856.987 321.805C857.504 321.366 858.101 321.122 858.777 321.072C859.455 321.019 860.149 321.188 860.858 321.578C861.522 321.944 862.02 322.408 862.353 322.97C862.687 323.533 862.842 324.159 862.819 324.849C862.797 325.534 862.582 326.248 862.173 326.991L858.821 333.074L856.171 331.614L859.263 326.003C859.589 325.421 859.691 324.882 859.569 324.388C859.449 323.889 859.124 323.494 858.593 323.201C858.237 323.005 857.879 322.908 857.521 322.91C857.167 322.915 856.832 323.022 856.516 323.232C856.207 323.44 855.937 323.748 855.707 324.157ZM863.129 340.379C862.271 339.906 861.6 339.382 861.116 338.808C860.635 338.239 860.324 337.655 860.185 337.054C860.046 336.453 860.061 335.871 860.23 335.31L862.862 336.331C862.832 336.563 862.852 336.807 862.922 337.062C862.992 337.317 863.133 337.567 863.343 337.813C863.556 338.065 863.855 338.297 864.24 338.51C864.817 338.828 865.369 338.948 865.898 338.872C866.428 338.802 866.874 338.44 867.235 337.784L868.199 336.037L868.087 335.975C867.824 336.176 867.512 336.331 867.149 336.439C866.787 336.548 866.382 336.576 865.935 336.524C865.488 336.473 865.011 336.307 864.505 336.028C863.788 335.633 863.226 335.107 862.82 334.451C862.42 333.793 862.236 333.024 862.267 332.143C862.305 331.261 862.615 330.291 863.198 329.234C863.794 328.151 864.469 327.345 865.221 326.813C865.973 326.282 866.741 325.997 867.525 325.958C868.313 325.922 869.057 326.097 869.758 326.483C870.292 326.778 870.69 327.116 870.95 327.497C871.213 327.874 871.38 328.258 871.451 328.649C871.529 329.038 871.557 329.394 871.535 329.717L871.635 329.772L872.519 328.167L875.15 329.617L869.833 339.265C869.385 340.078 868.812 340.648 868.112 340.976C867.412 341.304 866.634 341.411 865.779 341.296C864.925 341.187 864.041 340.882 863.129 340.379ZM866.442 334.501C866.869 334.736 867.288 334.829 867.699 334.78C868.116 334.729 868.514 334.548 868.891 334.236C869.274 333.923 869.62 333.487 869.928 332.927C870.237 332.367 870.426 331.839 870.494 331.341C870.565 330.84 870.514 330.393 870.341 330C870.169 329.607 869.869 329.293 869.441 329.058C869.006 328.818 868.574 328.734 868.145 328.806C867.718 328.873 867.314 329.072 866.932 329.403C866.55 329.733 866.21 330.169 865.91 330.713C865.606 331.264 865.42 331.783 865.352 332.27C865.29 332.755 865.346 333.188 865.519 333.57C865.699 333.951 866.006 334.261 866.442 334.501Z"
          fill="white"
        />
        <path
          d="M932.743 489V474.455H942.544V476.99H935.818V480.456H942.04V482.991H935.818V486.464H942.572V489H932.743ZM947.958 482.693V489H944.932V478.091H947.816V480.016H947.943C948.185 479.381 948.59 478.879 949.158 478.51C949.726 478.136 950.415 477.949 951.225 477.949C951.982 477.949 952.643 478.115 953.206 478.446C953.77 478.777 954.208 479.251 954.52 479.866C954.833 480.477 954.989 481.206 954.989 482.054V489H951.963V482.594C951.968 481.926 951.798 481.405 951.452 481.031C951.106 480.652 950.63 480.463 950.024 480.463C949.617 480.463 949.257 480.551 948.945 480.726C948.637 480.901 948.396 481.157 948.22 481.493C948.05 481.824 947.962 482.224 947.958 482.693ZM963.176 478.091V480.364H956.606V478.091H963.176ZM958.098 475.477H961.123V485.648C961.123 485.927 961.166 486.145 961.251 486.301C961.336 486.453 961.455 486.559 961.606 486.621C961.763 486.682 961.943 486.713 962.146 486.713C962.288 486.713 962.43 486.701 962.572 486.678C962.714 486.649 962.823 486.628 962.899 486.614L963.375 488.865C963.223 488.912 963.01 488.967 962.736 489.028C962.461 489.095 962.127 489.135 961.734 489.149C961.005 489.178 960.366 489.08 959.817 488.858C959.272 488.635 958.848 488.29 958.545 487.821C958.242 487.352 958.093 486.76 958.098 486.045V475.477ZM965.147 489V478.091H968.08V479.994H968.194C968.393 479.317 968.726 478.806 969.195 478.46C969.664 478.11 970.204 477.935 970.814 477.935C970.966 477.935 971.129 477.944 971.305 477.963C971.48 477.982 971.634 478.008 971.766 478.041V480.726C971.624 480.683 971.428 480.645 971.177 480.612C970.926 480.579 970.696 480.562 970.488 480.562C970.043 480.562 969.645 480.66 969.295 480.854C968.949 481.043 968.674 481.308 968.471 481.649C968.272 481.99 968.172 482.383 968.172 482.828V489H965.147ZM977.794 489.213C976.672 489.213 975.706 488.986 974.896 488.531C974.092 488.072 973.471 487.423 973.036 486.585C972.6 485.742 972.382 484.746 972.382 483.595C972.382 482.473 972.6 481.488 973.036 480.641C973.471 479.793 974.084 479.133 974.875 478.659C975.671 478.186 976.603 477.949 977.673 477.949C978.393 477.949 979.063 478.065 979.683 478.297C980.308 478.524 980.853 478.867 981.317 479.327C981.786 479.786 982.15 480.364 982.411 481.06C982.671 481.751 982.801 482.561 982.801 483.489V484.32H973.59V482.445H979.953C979.953 482.009 979.859 481.623 979.669 481.287C979.48 480.951 979.217 480.688 978.881 480.499C978.549 480.304 978.164 480.207 977.723 480.207C977.264 480.207 976.857 480.314 976.502 480.527C976.151 480.735 975.877 481.017 975.678 481.372C975.479 481.723 975.377 482.113 975.372 482.544V484.327C975.372 484.866 975.472 485.333 975.671 485.726C975.874 486.119 976.161 486.422 976.53 486.635C976.899 486.848 977.337 486.955 977.844 486.955C978.18 486.955 978.488 486.907 978.767 486.812C979.047 486.718 979.286 486.576 979.485 486.386C979.683 486.197 979.835 485.965 979.939 485.69L982.737 485.875C982.595 486.547 982.304 487.134 981.864 487.636C981.428 488.134 980.865 488.522 980.173 488.801C979.487 489.076 978.694 489.213 977.794 489.213ZM976.516 476.685L978.021 473.453H980.82L978.654 476.685H976.516ZM989.747 489.213C988.625 489.213 987.659 488.986 986.85 488.531C986.045 488.072 985.424 487.423 984.989 486.585C984.553 485.742 984.335 484.746 984.335 483.595C984.335 482.473 984.553 481.488 984.989 480.641C985.424 479.793 986.038 479.133 986.828 478.659C987.624 478.186 988.557 477.949 989.627 477.949C990.346 477.949 991.016 478.065 991.637 478.297C992.262 478.524 992.806 478.867 993.27 479.327C993.739 479.786 994.103 480.364 994.364 481.06C994.624 481.751 994.754 482.561 994.754 483.489V484.32H985.543V482.445H991.906C991.906 482.009 991.812 481.623 991.622 481.287C991.433 480.951 991.17 480.688 990.834 480.499C990.503 480.304 990.117 480.207 989.676 480.207C989.217 480.207 988.81 480.314 988.455 480.527C988.104 480.735 987.83 481.017 987.631 481.372C987.432 481.723 987.33 482.113 987.325 482.544V484.327C987.325 484.866 987.425 485.333 987.624 485.726C987.827 486.119 988.114 486.422 988.483 486.635C988.852 486.848 989.29 486.955 989.797 486.955C990.133 486.955 990.441 486.907 990.72 486.812C991 486.718 991.239 486.576 991.438 486.386C991.637 486.197 991.788 485.965 991.892 485.69L994.691 485.875C994.548 486.547 994.257 487.134 993.817 487.636C993.381 488.134 992.818 488.522 992.127 488.801C991.44 489.076 990.647 489.213 989.747 489.213Z"
          fill="white"
        />
        <g clip-path="url(#clip1_25_15)">
          <path
            d="M964.001 418C953.997 418 945.8 426.173 945.8 436.149C945.8 440.014 947.035 443.606 949.124 446.559L961.78 468.437C963.552 470.752 964.731 470.313 966.205 468.315L980.163 444.56C980.445 444.049 980.666 443.506 980.859 442.952C981.745 440.793 982.2 438.482 982.2 436.149C982.2 426.173 974.005 418 964.001 418ZM964.001 426.504C969.388 426.504 973.672 430.777 973.672 436.149C973.672 441.521 969.388 445.792 964.001 445.792C958.614 445.792 954.329 441.52 954.329 436.149C954.329 430.777 958.614 426.504 964.001 426.504Z"
            fill="#D93A40"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_25_15">
          <rect width="1126" height="850" fill="white" />
        </clipPath>
        <clipPath id="clip1_25_15">
          <rect width="52" height="52" fill="white" transform="translate(938 418)" />
        </clipPath>
      </defs>
    </svg>
  );
};
