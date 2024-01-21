export interface AdminList {
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    completed_date:string,
    animal:string,
    work_style_pattern:number[],
    has_360:boolean,
    multiples:boolean,
}

const adminListData: AdminList[] = [
    {
        "id" : 1,
        "firstname" : "Elizabeth",
        "lastname" : "Gareer",
        "email" : 'elizabeth@gmail.com',
        "completed_date" : '2023-12-20',
        "animal" : "/animal-dolphin.svg",
        "work_style_pattern" : [-23, 15, -10, 27],
        "has_360" : true,
        "multiples" : false
    },
    {
        "id" : 2,
        "firstname" : "Jason",
        "lastname" : "Carroll",
        "email" : 'jason@gmail.com',
        "completed_date" : '2023-11-18',
        "animal" : "/animal-eagle.svg",
        "work_style_pattern" : [16, -24, 23, 12],
        "has_360" : false,
        "multiples" : true
    },
    {
        "id" : 3,
        "firstname" : "Meg",
        "lastname" : "Poag",
        "email" : 'megpoag@gmail.com',
        "completed_date" : '2023-10-30',
        "animal" : "/animal-octopus.svg",
        "work_style_pattern" : [-28, 18, -13, 21],
        "has_360" : false,
        "multiples" : false
    },
    {
        "id" : 4,
        "firstname" : "Shawn",
        "lastname" : "Sundsvold",
        "email" : 'sundsvold@gmail.com',
        "completed_date" : '2023-10-20',
        "animal" : "/animal-wolf.svg",
        "work_style_pattern" : [27, 12, -10, -23],
        "has_360" : false,
        "multiples" : false
    },
]

export {adminListData}