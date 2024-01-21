export interface StyleList {
    img:string,
    head:string,
    desc:string,
}

const personalityStyles:StyleList[] = [
    {
        "img" : '/thinking_style.svg',
        "head" : 'Thinking Style',
        'desc' : "Strategic and holistic, able to foresee trends and possibilities from a 'high-flying' perspective."
    },
    {
        "img" : '/leadership_style.svg',
        "head" : 'Leadership Style',
        'desc' : "Inspirational, encouraging others to think big and strive for lofty goals."
    },
    {
        "img" : '/competitive_style.svg',
        "head" : 'Competitive Style',
        'desc' : "Focuses on leveraging unique strengths to dominate the market or niche, rather than direct competition."
    },
]

export {personalityStyles}