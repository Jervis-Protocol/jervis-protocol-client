type FUNDING_STATE_TYPE = {
    [state: number]: { sentence: string, word: string }
}

type FUNDING_TYPE = {
    [state: number]: string
}

export const FUNDING_STATE: FUNDING_STATE_TYPE = {
    10001: { sentence: "펀딩 진행중입니다.", word: '진행중' },
    10002: { sentence: "오픈 예정인 펀딩입니다", word: '준비중' },
    10003: { sentence: "성공한 펀딩입니다.", word: '성공' },
    10004: { sentence: "마감된 펀딩입니다.", word: '실패' },
    10005: { sentence: "취소된 펀딩입니다.", word: '취소' },
}

export const FUNDING_TYPE: FUNDING_TYPE = {
    12001: "목표 달성",
    12002: "기간 달성"
}

