let notSure: unknown = 2
const uncertain: any = notSure
notSure = uncertain
notSure = '231'
// uncertain.ll
// notSure.ll
;(notSure as { ll: string }).ll

export {}
