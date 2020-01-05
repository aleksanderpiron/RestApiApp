import React from 'react';

const Icon =(props)=>{
    let icon;
    switch(props.type){
        case 'plus':
            icon = <svg viewBox="0 0 52 52"><path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28H28v11a2 2 0 01-4 0V28H13.5a2 2 0 010-4H24V14a2 2 0 014 0v10h10.5a2 2 0 010 4z"/></svg>
        break;
        case 'close':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 47.971 47.971" ><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/></svg>
        break;
        case 'gear':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 268.765 268.765" ><g id="Settings"><g><path d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617 c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133 c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529 c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08 c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574 c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214 c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597 c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415 c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508 c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167 c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817 c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572 c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213 c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043 c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491 c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824 C179.418,159.385,159.312,179.491,134.595,179.491z"/></g></g></svg>
        break;
        case 'cart':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" width="475.084px" height="475.085px" viewBox="0 0 475.084 475.085"><path fill="#fff" d="M365.446,401.998c0,10.092,3.579,18.702,10.711,25.834c7.132,7.139,15.749,10.711,25.845,10.711 c10.081,0,18.698-3.572,25.83-10.711c7.139-7.132,10.711-15.742,10.711-25.834s-3.568-18.702-10.711-25.841 c-7.132-7.132-15.749-10.704-25.83-10.704c-10.096,0-18.713,3.572-25.845,10.704C369.025,383.296,365.446,391.906,365.446,401.998 z"/><path fill="#fff" d="M469.658,78.51c-3.618-3.617-7.898-5.426-12.848-5.426H113.918c-0.193-1.331-0.621-3.756-1.287-7.277 c-0.666-3.523-1.188-6.329-1.569-8.425c-0.383-2.087-1.093-4.611-2.142-7.561c-1.047-2.952-2.284-5.286-3.711-6.995 c-1.425-1.718-3.328-3.189-5.708-4.43c-2.378-1.233-5.092-1.853-8.136-1.853H18.276c-4.952,0-9.234,1.812-12.85,5.424 C1.809,45.583,0,49.868,0,54.816s1.809,9.231,5.426,12.847c3.619,3.617,7.902,5.424,12.85,5.424h58.237l50.532,234.976 c-0.378,0.76-2.329,4.373-5.852,10.848c-3.521,6.475-6.328,12.135-8.42,16.988c-2.093,4.859-3.14,8.616-3.14,11.279 c0,4.948,1.809,9.232,5.424,12.854c3.621,3.606,7.902,5.421,12.851,5.421h18.272h255.815h18.261c4.948,0,9.232-1.814,12.847-5.421 c3.62-3.621,5.427-7.905,5.427-12.854c0-4.949-1.807-9.233-5.427-12.847c-3.614-3.614-7.898-5.428-12.847-5.428h-262.66 c4.57-9.138,6.854-15.222,6.854-18.268c0-1.909-0.238-4.004-0.715-6.283s-1.047-4.805-1.713-7.569 c-0.667-2.752-1.093-4.799-1.283-6.133l298.077-34.831c4.753-0.575,8.658-2.614,11.703-6.14c3.046-3.518,4.565-7.562,4.565-12.133 V91.363C475.082,86.415,473.278,82.132,469.658,78.51z"/><path fill="#fff" d="M109.632,401.998c0,10.092,3.567,18.702,10.706,25.834c7.141,7.139,15.75,10.711,25.841,10.711 c10.085,0,18.699-3.572,25.835-10.711c7.139-7.132,10.71-15.742,10.71-25.834s-3.568-18.702-10.71-25.841 c-7.137-7.132-15.75-10.704-25.835-10.704c-10.09,0-18.704,3.572-25.841,10.704C113.203,383.296,109.632,391.906,109.632,401.998z "/></svg>
        break;
        case 'error':
            icon = <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 286.054 286.054" ><g><path d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z"/></g></svg>
        break;
        case 'arrow':
            icon = <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" ><path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124 c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844 L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412 c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008 c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788 C492,219.198,479.172,207.418,464.344,207.418z"/></svg>
        break;
        case 'arrow-bold':
            icon = <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.01 512.01"><path d="M505.754,240.923L271.088,6.256c-3.989-4.011-9.408-6.251-15.083-6.251H21.338c-8.619,0-16.427,5.184-19.712,13.163 c-3.307,7.979-1.472,17.152,4.629,23.253l219.584,219.584L6.256,475.59c-6.101,6.101-7.936,15.275-4.629,23.253 c3.285,7.979,11.093,13.163,19.712,13.163h234.667c5.675,0,11.093-2.24,15.083-6.251l234.667-234.667 C514.096,262.747,514.096,249.264,505.754,240.923z"/></svg>
        break;
        case 'info':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 330 330" ><path fill="#fff" d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"/><path fill="#fff" d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991 c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"/><path fill="#fff" d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z"/></svg>
        break;
        case 'picture':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 58 58" ><path fill="#fff" d="M57,6H1C0.448,6,0,6.447,0,7v44c0,0.553,0.448,1,1,1h56c0.552,0,1-0.447,1-1V7C58,6.447,57.552,6,57,6z M56,50H2V8h54V50z"/><path fill="#fff" d="M16,28.138c3.071,0,5.569-2.498,5.569-5.568C21.569,19.498,19.071,17,16,17s-5.569,2.498-5.569,5.569 C10.431,25.64,12.929,28.138,16,28.138z M16,19c1.968,0,3.569,1.602,3.569,3.569S17.968,26.138,16,26.138s-3.569-1.601-3.569-3.568 S14.032,19,16,19z"/><path fill="#fff" d="M7,46c0.234,0,0.47-0.082,0.66-0.249l16.313-14.362l10.302,10.301c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414 l-4.807-4.807l9.181-10.054l11.261,10.323c0.407,0.373,1.04,0.345,1.413-0.062c0.373-0.407,0.346-1.04-0.062-1.413l-12-11 c-0.196-0.179-0.457-0.268-0.72-0.262c-0.265,0.012-0.515,0.129-0.694,0.325l-9.794,10.727l-4.743-4.743 c-0.374-0.373-0.972-0.392-1.368-0.044L6.339,44.249c-0.415,0.365-0.455,0.997-0.09,1.412C6.447,45.886,6.723,46,7,46z"/></svg>
        break;
        case 'search':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" width="446.25px" height="446.25px" viewBox="0 0 446.25 446.25" ><g><g id="search"><path fill="#ccc" d="M318.75,280.5h-20.4l-7.649-7.65c25.5-28.05,40.8-66.3,40.8-107.1C331.5,73.95,257.55,0,165.75,0S0,73.95,0,165.75 S73.95,331.5,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.649v20.4L408,446.25L446.25,408L318.75,280.5z M165.75,280.5 C102,280.5,51,229.5,51,165.75S102,51,165.75,51S280.5,102,280.5,165.75S229.5,280.5,165.75,280.5z"/></g></g></svg>
        break;
        case 'success':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" width="305.002px" height="305.002px" viewBox="0 0 305.002 305.002"><path fill='#fff' d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/><path fill='#fff' d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/></svg>
        break;
        case 'success-thin':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52"><path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/><path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406 l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411 C39.251,14.885,38.62,14.922,38.252,15.336z"/></svg>
        break;
        case 'delete':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" width="408.483px" height="408.483px" viewBox="0 0 408.483 408.483"><path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/><path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/></svg>;
        break;
        case 'edit':
            icon = <svg height="381pt" viewBox="0 -1 381.53417 381" width="381pt"><path d="m370.589844 230.964844c-5.523438 0-10 4.476562-10 10v88.792968c-.019532 16.558594-13.4375 29.980469-30 30h-280.589844c-16.5625-.019531-29.980469-13.441406-30-30v-260.589843c.019531-16.5625 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.589843c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.789062c0-5.523438-4.476563-10.003906-10-10.003906zm0 0"/><path d="m156.367188 178.34375 146.011718-146.015625 47.089844 47.089844-146.011719 146.015625zm0 0"/><path d="m132.542969 249.257812 52.039062-14.414062-37.625-37.625zm0 0"/><path d="m362.488281 7.578125c-9.769531-9.746094-25.585937-9.746094-35.355469 0l-10.605468 10.605469 47.089844 47.089844 10.605468-10.605469c9.75-9.769531 9.75-25.585938 0-35.355469zm0 0"/></svg>
        break;
        case 'user':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 55 55"><path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752 c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348 c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98 c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033 c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55 c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287 c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104 c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1 c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764 l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5 c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957 c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545 c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8 s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545 c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313 c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"/></svg>
        break;
        case 'eye':
            icon = <svg className='icon' version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 488.85 488.85"><path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/></svg>
        break;
        case 'logout':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 30.143 30.143"><path d="M20.034,2.357v3.824c3.482,1.798,5.869,5.427,5.869,9.619c0,5.98-4.848,10.83-10.828,10.83 c-5.982,0-10.832-4.85-10.832-10.83c0-3.844,2.012-7.215,5.029-9.136V2.689C4.245,4.918,0.731,9.945,0.731,15.801 c0,7.921,6.42,14.342,14.34,14.342c7.924,0,14.342-6.421,14.342-14.342C29.412,9.624,25.501,4.379,20.034,2.357z"/><path d="M14.795,17.652c1.576,0,1.736-0.931,1.736-2.076V2.08c0-1.148-0.16-2.08-1.736-2.08 c-1.57,0-1.732,0.932-1.732,2.08v13.496C13.062,16.722,13.225,17.652,14.795,17.652z"/></svg>
        break;
        case 'cart-outline':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" ><path d="M510.354,111.029c-1.275-1.592-3.145-2.597-5.176-2.781L91.096,70.665c-0.232-5.7-2.493-11.333-6.835-15.675L40.172,10.9 c-4.444-4.444-10.354-6.893-16.64-6.893c-6.286,0-12.195,2.449-16.639,6.893C2.448,15.345,0,21.255,0,27.541 s2.448,12.195,6.893,16.64l44.089,44.088c4.444,4.445,10.354,6.893,16.64,6.893c2.365,0,4.677-0.347,6.878-1.016l62.687,207.577 c5.105,16.904,20.392,28.13,37.79,28.13c0.984,0,1.977-0.036,2.973-0.109L461.443,309c14.865-1.087,27.053-12.604,28.981-27.384 l21.512-164.928C512.201,114.665,511.629,112.622,510.354,111.029z M73.654,77.662c-1.612,1.611-3.754,2.499-6.033,2.499 c-2.279,0-4.421-0.887-6.033-2.499L17.499,33.573C15.887,31.962,15,29.819,15,27.541c0-2.278,0.887-4.422,2.499-6.034 c1.612-1.611,3.754-2.499,6.033-2.499s4.421,0.888,6.033,2.499l44.089,44.089C76.981,68.923,76.981,74.336,73.654,77.662z  M258.275,100.9l3.382,54.872l-70.111-2.554L180.483,93.84L258.275,100.9z M87.528,85.402l77.435,7.029l11.221,60.228 l-69.106-2.518L87.528,85.402z M133.115,236.355l-21.453-71.037L179,167.771l12.536,67.286L133.115,236.355z M176.854,314.783 c-11.56,0.843-21.959-6.309-25.308-17.397l-13.93-46.127l56.704-1.26l11.673,62.653L176.854,314.783z M194.362,168.331 l68.222,2.485l3.857,62.576l-59.71,1.327L194.362,168.331z M221.045,311.55l-11.531-61.889l57.849-1.286l3.668,59.517 L221.045,311.55z M339.04,302.916l-53.047,3.881l-3.621-58.756l58.163-1.292L339.04,302.916z M340.935,231.737l-59.486,1.322 l-3.802-61.694l64.832,2.361L340.935,231.737z M342.878,158.73l-66.159-2.41l-3.331-54.048l70.821,6.428L342.878,158.73z  M411.194,297.636l-57.119,4.18l1.475-55.4l59.873-1.331L411.194,297.636z M416.632,230.055l-60.683,1.348l1.521-57.131 l63.465,2.312L416.632,230.055z M422.139,161.618l-64.27-2.341l1.31-49.218l66.622,6.047L422.139,161.618z M475.55,279.676 c-1.01,7.752-7.404,13.793-15.201,14.364l-34.017,2.489l4.166-51.779l49.752-1.106L475.55,279.676z M482.213,228.597 l-50.505,1.123l4.232-52.589l52.736,1.921L482.213,228.597z M490.624,164.112l-53.481-1.948l3.597-44.703l55.314,5.021 L490.624,164.112z"/><path d="M439.855,445.804v-17.973h16.548v0c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H144.04 c-2.919,0-5.516-1.398-7.123-3.835c-1.607-2.438-1.87-5.374-0.72-8.058l21.185-49.432c1.632-3.807-0.132-8.216-3.939-9.848 c-3.807-1.632-8.216,0.131-9.848,3.939l-21.185,49.431c-3.125,7.293-2.383,15.601,1.984,22.225 c4.367,6.623,11.711,10.578,19.646,10.578h8.267v17.973c-13.786,3.375-24.048,15.829-24.048,30.64 c0,17.396,14.152,31.549,31.548,31.549s31.548-14.153,31.548-31.549c0-14.811-10.262-27.265-24.048-30.64v-17.973h257.548v17.973 c-13.786,3.375-24.048,15.829-24.048,30.64c0,17.396,14.152,31.549,31.548,31.549s31.548-14.153,31.548-31.549 C463.903,461.633,453.641,449.179,439.855,445.804z M176.355,476.443c0,9.125-7.423,16.549-16.548,16.549 s-16.548-7.424-16.548-16.549s7.423-16.548,16.548-16.548S176.355,467.319,176.355,476.443z M432.355,492.992 c-9.125,0-16.548-7.424-16.548-16.549s7.423-16.548,16.548-16.548s16.548,7.424,16.548,16.548 C448.903,485.568,441.48,492.992,432.355,492.992z"/></svg>
        break;
        case 'box':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" ><path d="M491.729,112.971L259.261,0.745c-2.061-0.994-4.461-0.994-6.521,0L20.271,112.971c-2.592,1.251-4.239,3.876-4.239,6.754 v272.549c0,2.878,1.647,5.503,4.239,6.754l232.468,112.226c1.03,0.497,2.146,0.746,3.261,0.746s2.23-0.249,3.261-0.746 l232.468-112.226c2.592-1.251,4.239-3.876,4.239-6.754V119.726C495.968,116.846,494.32,114.223,491.729,112.971z M256,15.828 l215.217,103.897l-62.387,30.118c-0.395-0.301-0.812-0.579-1.27-0.8L193.805,45.853L256,15.828z M176.867,54.333l214.904,103.746 l-44.015,21.249L132.941,75.624L176.867,54.333z M396.799,172.307v78.546l-41.113,19.848v-78.546L396.799,172.307z  M480.968,387.568L263.5,492.55V236.658l51.873-25.042c3.73-1.801,5.294-6.284,3.493-10.015 c-1.801-3.729-6.284-5.295-10.015-3.493L256,223.623l-20.796-10.04c-3.731-1.803-8.214-0.237-10.015,3.493 c-1.801,3.73-0.237,8.214,3.493,10.015l19.818,9.567V492.55L31.032,387.566V131.674l165.6,79.945 c1.051,0.508,2.162,0.748,3.255,0.748c2.788,0,5.466-1.562,6.759-4.241c1.801-3.73,0.237-8.214-3.493-10.015l-162.37-78.386 l74.505-35.968L340.582,192.52c0.033,0.046,0.07,0.087,0.104,0.132v89.999c0,2.581,1.327,4.98,3.513,6.353 c1.214,0.762,2.599,1.147,3.988,1.147c1.112,0,2.227-0.247,3.26-0.746l56.113-27.089c2.592-1.251,4.239-3.875,4.239-6.754v-90.495 l69.169-33.392V387.568z"/><path d="M92.926,358.479L58.811,342.01c-3.732-1.803-8.214-0.237-10.015,3.493c-1.801,3.73-0.237,8.214,3.493,10.015 l34.115,16.469c1.051,0.508,2.162,0.748,3.255,0.748c2.788,0,5.466-1.562,6.759-4.241 C98.22,364.763,96.656,360.281,92.926,358.479z"/><path d="M124.323,338.042l-65.465-31.604c-3.731-1.801-8.214-0.237-10.015,3.494c-1.8,3.73-0.236,8.214,3.494,10.015 l65.465,31.604c1.051,0.507,2.162,0.748,3.255,0.748c2.788,0,5.466-1.562,6.759-4.241 C129.617,344.326,128.053,339.842,124.323,338.042z"/></svg>
        break;
        case 'details':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" ><path d="M167.306,130.482v-26.146c5.555,1.815,9.048,5.479,9.048,8.876c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5 c0-11.979-10.095-21.739-24.048-24.345V87.66c0-4.143-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.357-7.5,7.5v1.207 c-13.953,2.606-24.048,12.365-24.048,24.345c0,16.74,13.375,23.774,24.048,27.821v26.146c-5.554-1.814-9.048-5.478-9.048-8.875 c0-4.143-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.357-7.5,7.5c0,11.979,10.095,21.739,24.048,24.345v1.206c0,4.143,3.358,7.5,7.5,7.5 c4.142,0,7.5-3.357,7.5-7.5v-1.206c13.953-2.606,24.048-12.365,24.048-24.345C191.354,141.565,177.979,134.531,167.306,130.482z  M152.306,124.673c-7.518-3.68-9.048-6.892-9.048-11.46c0-3.397,3.493-7.062,9.048-8.876V124.673z M167.307,167.18v-20.336 c7.518,3.68,9.048,6.891,9.048,11.46C176.355,161.701,172.862,165.366,167.307,167.18z"/><path d="M384.258,224.451H127.742c-4.142,0-7.5,3.358-7.5,7.5v144.291c0,4.143,3.358,7.5,7.5,7.5h256.516 c4.143,0,7.5-3.357,7.5-7.5V231.951C391.758,227.808,388.401,224.451,384.258,224.451z M135.242,239.451h129.29v33.098h-129.29 V239.451z M264.533,368.743H135.242v-33.097h129.291V368.743z M264.533,320.646L264.533,320.646H135.242v-33.097h129.291V320.646z  M279.532,239.451h41.113v33.098h-41.113V239.451z M320.646,368.743h-41.113v-33.097h41.113V368.743z M320.646,320.646h-41.113 v-33.097h41.113V320.646z M376.758,368.742h-41.112v-33.097h41.112V368.742z M376.758,320.646h-41.112v-33.097h41.112V320.646z  M376.758,272.549h-41.112v-33.098h41.112V272.549z"/><path d="M328.146,96.193h-16.029c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h16.029c4.143,0,7.5-3.357,7.5-7.5 S332.289,96.193,328.146,96.193z"/><path d="M280.05,96.193h-56.114c-4.142,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h56.114c4.143,0,7.5-3.357,7.5-7.5 S284.193,96.193,280.05,96.193z"/><path d="M328.146,128.258h-104.21c-4.142,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h104.21c4.143,0,7.5-3.357,7.5-7.5 S332.289,128.258,328.146,128.258z"/><path d="M328.146,160.322h-16.032c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h16.032c4.143,0,7.5-3.357,7.5-7.5 S332.288,160.322,328.146,160.322z"/><path d="M280.049,160.322h-56.113c-4.142,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h56.113c4.143,0,7.5-3.357,7.5-7.5 S284.192,160.322,280.049,160.322z"/><path d="M416.322,0H95.677C78.281,0,64.129,14.152,64.129,31.549v448.902c0,17.396,14.152,31.549,31.548,31.549h320.645 c17.396,0,31.549-14.152,31.549-31.549V31.549C447.871,14.152,433.719,0,416.322,0z M432.871,480.451 c0,9.125-7.424,16.549-16.549,16.549H95.677c-9.125,0-16.548-7.424-16.548-16.549V31.549C79.129,22.424,86.553,15,95.677,15 h320.645c9.125,0,16.549,7.424,16.549,16.549V480.451z"/><path d="M408.307,432.871H103.693c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h304.613c4.143,0,7.5-3.357,7.5-7.5 S412.449,432.871,408.307,432.871z"/><path d="M408.307,32.064H103.693c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h304.613c4.143,0,7.5-3.357,7.5-7.5 C415.806,35.421,412.449,32.064,408.307,32.064z"/><path d="M272.032,464.936h-32.064c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h32.064c4.143,0,7.5-3.357,7.5-7.5 S276.175,464.936,272.032,464.936z"/></svg>
        break;
        case 'card':
            icon = <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.16 512.16"><g transform="translate(1 1)"><path d="M272.067,336.147H408.6c5.12,0,8.533-3.413,8.533-8.533v-76.8c0-5.12-3.413-8.533-8.533-8.533H272.067 c-5.12,0-8.533,3.413-8.533,8.533v76.8C263.533,332.733,266.947,336.147,272.067,336.147z M280.6,259.347h119.467v59.733H280.6 V259.347z"/><path d="M41.667,225.213h68.267c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H41.667 c-5.12,0-8.533,3.413-8.533,8.533S36.547,225.213,41.667,225.213z"/><path d="M144.067,225.213h68.267c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-68.267 c-5.12,0-8.533,3.413-8.533,8.533S138.947,225.213,144.067,225.213z"/><path d="M41.667,259.347H152.6c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H41.667c-5.12,0-8.533,3.413-8.533,8.533 S36.547,259.347,41.667,259.347z"/><path d="M212.333,242.28h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6c5.12,0,8.533-3.413,8.533-8.533 S217.453,242.28,212.333,242.28z"/><path d="M503.32,136.467c-5.973-7.68-13.653-11.947-23.04-12.8l-20.48-2.482V97.213V80.147c0-18.773-15.36-34.133-34.133-34.133 H33.133C14.36,46.013-1,61.373-1,80.147v17.067v68.267v187.733c0,15.413,10.357,28.518,24.453,32.718 c-0.43,17.262,12.631,32.248,30.161,33.842l394.24,44.373c0.853,0,2.56,0,3.413,0c17.067,0,32.427-12.8,34.133-29.013 l25.6-273.92C511.853,152.68,509.293,143.293,503.32,136.467z M16.067,105.747h426.667v22.187v29.013H16.067V105.747z  M33.133,63.08h392.533c9.387,0,17.067,7.68,17.067,17.067v8.533H16.067v-8.533C16.067,70.76,23.747,63.08,33.133,63.08z  M16.067,353.213v-179.2h426.667v179.2c0,9.387-7.68,17.067-17.067,17.067H33.987h-0.853 C23.747,370.28,16.067,362.6,16.067,353.213z M493.933,157.8l-25.6,273.92c-0.853,9.387-9.387,16.213-18.773,15.36 L56.173,402.707c-8.533-0.853-14.507-7.68-15.36-15.36h384.853c18.773,0,34.133-15.36,34.133-34.133V165.48v-28.16l19.627,1.707 c4.267,0,8.533,2.56,11.093,5.973C493.08,148.413,494.787,153.533,493.933,157.8z"/></g></svg>
        break;
        case 'money':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 478.856 478.856"><path d="M406.872,160.017c-0.005,0-0.011,0-0.016,0h-400c-3.782-0.004-6.852,3.058-6.856,6.84c0,0.005,0,0.011,0,0.016v192 c-0.004,3.782,3.058,6.852,6.84,6.856c0.005,0,0.011,0,0.016,0h272c3.786,0,6.856-3.07,6.856-6.856 c0-3.786-3.07-6.856-6.856-6.856H13.712V173.729H400v17.144c-0.004,3.782,3.058,6.852,6.84,6.856c0.005,0,0.011,0,0.016,0 c3.782,0.004,6.852-3.058,6.856-6.84c0-0.005,0-0.011,0-0.016v-24C413.716,163.091,410.654,160.022,406.872,160.017z"/><path d="M360.36,128.185l-320-72c-1.776-0.397-3.637-0.075-5.176,0.896c-1.537,0.979-2.624,2.526-3.024,4.304l-16,72 c-0.822,3.698,1.51,7.362,5.208,8.184c3.698,0.822,7.362-1.51,8.184-5.208l14.504-65.288l313.296,70.488 c0.496,0.115,1.003,0.172,1.512,0.168c3.786-0.007,6.85-3.082,6.844-6.868C365.702,131.66,363.482,128.89,360.36,128.185z"/><path d="M321.504,88.513l-192-80c-3.337-1.391-7.182,0.038-8.8,3.272l-16,32c-1.807,3.342-0.563,7.517,2.78,9.324 c3.342,1.807,7.517,0.563,9.324-2.78c0.071-0.131,0.138-0.265,0.2-0.401v0.016l13.128-26.272l186.072,77.528 c3.504,1.462,7.53-0.192,8.992-3.696C326.662,94.002,325.008,89.976,321.504,88.513z"/><path d="M326.352,192.017h-63.496c-3.786,0-6.856,3.07-6.856,6.856c0,3.786,3.07,6.856,6.856,6.856h63.496 c3.786,0,6.856-3.07,6.856-6.856S330.138,192.017,326.352,192.017z"/><path d="M198.856,192.473c-38.881,0-70.4,31.519-70.4,70.4c0.04,38.864,31.536,70.36,70.4,70.4c38.881,0,70.4-31.519,70.4-70.4 S237.737,192.473,198.856,192.473z M198.856,320.473c-31.812,0-57.6-25.788-57.6-57.6c0.035-31.797,25.803-57.565,57.6-57.6 c31.812,0,57.6,25.788,57.6,57.6C256.456,294.685,230.668,320.473,198.856,320.473z"/><path d="M390.856,214.873c-42.4,0-88,10.016-88,32v192c0,21.984,45.6,32,88,32c42.4,0,88-10.016,88-32v-192 C478.856,224.889,433.256,214.873,390.856,214.873z M462.856,438.753c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16 v-12.576c17.024,8.576,45.144,12.576,72,12.576c26.856,0,54.984-4.04,72-12.584V438.753z M462.856,406.753 c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576c17.024,8.576,45.144,12.576,72,12.576 c26.856,0,54.984-4.04,72-12.584V406.753z M462.856,374.753c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576 c17.024,8.576,45.144,12.576,72,12.576c26.856,0,54.984-4.04,72-12.584V374.753z M462.856,342.753 c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576c17.024,8.576,45.144,12.576,72,12.576 c26.856,0,54.984-4.04,72-12.584V342.753z M462.856,310.753c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576 c17.024,8.536,45.144,12.576,72,12.576c26.856,0,54.984-4.04,72-12.584V310.753z M462.856,278.753 c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576c17.024,8.536,45.144,12.576,72,12.576 c26.856,0,54.984-4.04,72-12.584V278.753z M390.856,262.873c-46.728,0-70.712-11.648-72-15.856v-0.048 c1.288-4.456,25.272-16.096,72-16.096c46.4,0,70.4,11.472,72,16C461.256,251.401,437.256,262.873,390.856,262.873z"/><path d="M134.856,320.009H74.384l-28.672-31.36v-52l31.664-30.92h57.48c3.786,0,6.856-3.07,6.856-6.856 c0-3.786-3.07-6.856-6.856-6.856H74.592c-1.792-0.004-3.515,0.694-4.8,1.944l-35.736,34.856c-1.335,1.56-2.067,3.547-2.064,5.6 v56.896c0,1.711,0.639,3.36,1.792,4.624l32.504,35.552c1.299,1.422,3.137,2.233,5.064,2.232h63.504 c3.786,0,6.856-3.07,6.856-6.856C141.712,323.079,138.643,320.009,134.856,320.009z"/><path d="M202.856,254.873h-8c-2.488,0-4-1.392-4-2c0-0.608,1.512-2,4-2h20c4.418,0,8-3.582,8-8s-3.582-8-8-8h-8 c0-4.418-3.582-8-8-8s-8,3.582-8,8v0.36c-8.873,1.253-15.595,8.648-16,17.6c0.573,10.489,9.507,18.548,20,18.04h8 c2.488,0,4,1.392,4,2c0,0.608-1.512,2-4,2h-20c-4.418,0-8,3.582-8,8s3.582,8,8,8h8c0,4.418,3.582,8,8,8s8-3.582,8-8v-0.36 c8.873-1.253,15.595-8.648,16-17.6C222.283,262.424,213.349,254.365,202.856,254.873z"/></svg>
        break;
        case 'present':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 470 470"><path d="M122.268,68.085c2.924,0,5.704-1.721 6.913-4.584c1.611-3.816-0.176-8.215-3.991-9.827l-21.372-9.025 c-3.816-1.612-8.215,0.176-9.827,3.991c-1.611,3.816,0.176,8.215,3.991,9.827l21.372,9.025 C120.307,67.895,121.295,68.085,122.268,68.085z"/><path d="M433.8,88.115h-28.384c9.407-9.345,15.242-22.282,15.242-36.558C420.658,23.129,397.529,0,369.1,0 c-7.336,0-14.454,1.524-21.17,4.535l-43.122,19.442l-32.534,14.679v-2.589c0-4.142-3.358-7.5-7.5-7.5h-59.548 c-4.142,0-7.5,3.358-7.5,7.5v2.59l-75.67-34.129C115.354,1.524,108.236,0,100.9,0C72.471,0,49.342,23.129,49.342,51.558 c0,14.276,5.835,27.212,15.242,36.558H36.2c-4.142,0-7.5,3.358-7.5,7.5v71.791c0,4.142,3.358,7.5,7.5,7.5h3.874V462.5 c0,4.142,3.358,7.5,7.5,7.5h374.853c4.142,0,7.5-3.358,7.5-7.5V174.906h3.874c4.142,0,7.5-3.358,7.5-7.5V95.615 C441.3,91.473,437.942,88.115,433.8,88.115z M264.774,395c-4.142,0-7.5,3.358-7.5,7.5V455h-44.548V174.906h44.548V372.5 c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V174.906h142.652V455H272.274v-52.5C272.274,398.358,268.916,395,264.774,395z  M64.342,51.558C64.342,31.4,80.742,15,100.9,15c5.207,0,10.26,1.082,15.005,3.21c24.609,11.094,68.01,30.662,81.821,36.9v29.197 l-44.899-18.961c-3.816-1.612-8.215,0.176-9.827,3.991c-1.611,3.816,0.176,8.215,3.991,9.827l21.197,8.952H100.9 C80.742,88.115,64.342,71.716,64.342,51.558z M405.658,51.558c0,20.158-16.4,36.558-36.558,36.558h-67.288l70.206-29.648 c3.815-1.612,5.603-6.011,3.991-9.827s-6.011-5.604-9.827-3.991l-93.908,39.658V55.109c13.811-6.237,57.21-25.805,81.807-36.894 C358.84,16.082,363.893,15,369.1,15C389.258,15,405.658,31.4,405.658,51.558z M426.3,159.906H282.274v-56.791H426.3V159.906z  M212.726,50.592c0.016-0.275,0.017-0.562,0-0.86v-6.165h44.548v6.165c-0.017,0.298-0.016,0.585,0,0.86v37.523h-44.548V50.592z  M205.183,103.115c0.066,0,59.568,0,59.568,0c0.066,0,2.523,0,2.523,0v56.791h-64.548v-56.791H205.183z M187.726,103.115v56.791 H43.7v-56.791H187.726z M55.074,174.906h142.652V455H55.074V174.906z"/></svg>
        break;
        case 'alphabet':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 496.188 496.188"><path d="M196.698,108.246c-5.006-16.197-19.999-27.241-36.96-27.241h-41.996c-17.006,0-32.037,11.116-37.01,27.396L1.629,367.257 c-3.45,11.247-1.355,23.452,5.657,32.902c6.992,9.447,18.05,15.025,29.811,15.025c16.67,0,31.287-11.116,35.747-27.167 l16.263-58.612h95.689l17.514,58.246c4.91,16.345,19.953,27.533,37.051,27.533c12.307,0,23.871-5.846,31.156-15.742 c7.301-9.904,9.448-22.679,5.809-34.42L196.698,108.246z M100.018,272.891l19.808-70.913c5.446-19.337,10.426-44.609,15.398-64.451 h0.946c4.974,19.842,10.959,44.625,16.881,64.451l20.832,70.913H100.018z"/><path d="M495.093,362.394v-69.026c0-46.676-21.128-85.658-87.331-85.658c-24.577,0-45.017,4.506-59.917,9.814 c-9.902,3.531-15.35,14.109-12.473,24.217l0.197,0.665c1.511,5.319,5.156,9.783,10.065,12.352c4.895,2.571,10.62,3.025,15.87,1.253 c10.85-3.661,23.292-6.082,35.309-6.082c30.462,0,36.154,15.028,36.154,25.582v2.853c-70.256-0.415-116.538,24.346-116.538,75.915 c0,31.68,23.953,60.897,64.171,60.897c23.534,0,43.813-8.538,56.824-24.37h1.198l1.596,8.685 c1.207,6.496,6.864,11.221,13.482,11.221h28.767c3.824,0,7.467-1.587,10.054-4.384c2.602-2.797,3.919-6.554,3.626-10.358 C495.4,386.195,495.093,374.461,495.093,362.394z M434.967,338.44c0,3.649-0.389,7.311-1.218,10.554 c-4.053,12.588-16.639,22.736-32.072,22.736c-13.792,0-24.36-7.71-24.36-23.541c0-23.955,25.188-31.664,57.65-31.267V338.44z"/></svg>
        break;
        case 'price':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 486.982 486.982"><path d="M131.35,422.969c14.6,14.6,38.3,14.6,52.9,0l181.1-181.1c5.2-5.2,9.2-11.4,11.8-18c18.2,5.1,35.9,7.8,51.5,7.7 c38.6-0.2,51.4-17.1,55.6-27.2c4.2-10,7.2-31-19.9-58.6c-0.3-0.3-0.6-0.6-0.9-0.9c-16.8-16.8-41.2-32.3-68.9-43.8 c-5.1-2.1-10.2-4-15.2-5.8v-0.3c-0.3-22.2-18.2-40.1-40.4-40.4l-108.5-1.5c-14.4-0.2-28.2,5.4-38.3,15.6l-181.2,181.1 c-14.6,14.6-14.6,38.3,0,52.9L131.35,422.969z M270.95,117.869c12.1-12.1,31.7-12.1,43.8,0c7.2,7.2,10.1,17.1,8.7,26.4 c11.9,8.4,26.1,16.2,41.3,22.5c5.4,2.2,10.6,4.2,15.6,5.9l-0.6-43.6c0.9,0.4,1.7,0.7,2.6,1.1c23.7,9.9,45,23.3,58.7,37 c0.2,0.2,0.4,0.4,0.6,0.6c13,13.3,14.4,21.8,13.3,24.4c-3.4,8.1-39.9,15.3-95.3-7.8c-16.2-6.8-31.4-15.2-43.7-24.3 c-0.4,0.5-0.9,1-1.3,1.5c-12.1,12.1-31.7,12.1-43.8,0C258.85,149.569,258.85,129.969,270.95,117.869z"/></svg>
        break;
        case 'calendar':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" width="488.152px" height="488.152px" viewBox="0 0 488.152 488.152"><path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66 c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z"/><path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66 c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z"/><path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66 c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z"/><path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653 c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z"/><path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653 c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z"/><path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653 c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z"/><path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142 h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05 C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82 c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588 c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921 h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z"/><path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128 C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z"/><path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162 c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z"/></svg>
        break;
        case 'angle':
            icon = <svg version="1.1" id="Capa_1" x="0px" y="0px" width="284.935px" height="284.936px" viewBox="0 0 284.935 284.936"><path d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133 c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677 c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854 c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z"/></svg>
        break;
        default:
            icon = <p>Choose type of icon</p>
        break;
    }
    return(
        <span onClick={props.click} className={props.iconClass?'icon '+props.iconClass:'icon'}>
            {icon}
        </span>
    )
}

export default Icon;