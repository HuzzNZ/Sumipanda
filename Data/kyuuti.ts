interface Member {
    firstName: string
    lastName: string
    color: string
    birthday: string
}

interface Seiyuu {
    firstName: string
    lastName: string
    nickname?: string
    birthday: string
    character: Member
}

interface Unit {
    name: string
    members: Member[]
}

export const members: Member[] = [
    { firstName: "Suzune", lastName: "Miyama", color: "#ea5750", birthday: "0319" },
    { firstName: "Rena", lastName: "Hananoi", color: "#5f7dde", birthday: "1225" },
    { firstName: "Hiromi", lastName: "Hamaguri", color: "#d4d358", birthday: "0728" },
    { firstName: "Nagisa", lastName: "Imau", color: "#61ba78", birthday: "0601" },
    { firstName: "Nodoka", lastName: "Yagi", color: "#a589be", birthday: "0924" },
    { firstName: "Ao", lastName: "Yodogawa", color: "#62c7df", birthday: "1125" },
    { firstName: "Uta", lastName: "Koizumi", color: "#eb9abb", birthday: "1107" },
    { firstName: "Shiori", lastName: "Yamaga", color: "#a1dd4f", birthday: "0901" },
    { firstName: "Mako", lastName: "Toma", color: "#f29750", birthday: "0707" }
]

export const seiyuu: Seiyuu[] = [
    { firstName: "Hinaki", lastName: "Yano", birthday: "0305", character: members[0] },
    { firstName: "Saku", lastName: "Mizuno", birthday: "0305", character: members[1] },
    { firstName: "Nozomi", lastName: "Nagumo", nickname: "Nonchan", birthday: "0305", character: members[2] },
    { firstName: "Ruri", lastName: "Arai", birthday: "0305", character: members[3] },
    { firstName: "Hina", lastName: "Youmiya", birthday: "0305", character: members[4] },
    { firstName: "Yuka", lastName: "Iwahashi", birthday: "0305", character: members[5] },
    { firstName: "Mizuna", lastName: "Shirakawa", birthday: "0305", character: members[6] },
    { firstName: "Miharu", lastName: "Hanai", birthday: "0305", character: members[7] },
    { firstName: "Shino", lastName: "Shimoji", birthday: "0305", character: members[8] },
]

export const units: Unit[] = [
    { name: "9-tie", members: members },
    { name: "Suzu☆Rena", members: [members[0], members[1]] },
    { name: "Splasoda°", members: [members[2], members[3], members[4], members[5]] },
    { name: "GAPsCAPs", members: [members[6], members[7], members[8]] },
]
