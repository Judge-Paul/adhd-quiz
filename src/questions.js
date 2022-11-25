const questions = [
    {
        questionText: 'How often do you have difficulty sustaining your attention while doing something for work, school, a hobby, or fun activity (e.g., remaining focused during lectures, lengthy reading or conversations)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often are you easily distracted by external stimuli, like something in your environment or unrelated thoughts?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you avoid, dislike, or are reluctant to engage in tasks that require sustained mental effort or thought?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you have trouble listening to someone, even when they are speaking directly to you — like your mind is somewhere else?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you have difficulty in organizing an activity or task needing to get done (e.g., poor time management, fails to meet deadlines, difficulty managing sequential tasks)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you have difficulty in organizing an activity or task needing to get done (e.g., poor time management, fails to meet deadlines, difficulty managing sequential tasks)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you fail to give close attention to details, or make careless mistakes in things such as schoolwork, at work, or during other activities?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you forget to do something you do all the time, such as missing an appointment or paying a bill?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you lose, misplace or damage something that is necessary in order to get things done (e.g., your phone, eyeglasses, paperwork, wallet, keys, etc.)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you have trouble following through on instructions, or failing to finish schoolwork, chores, or duties in the workplace (e.g., you start a task but quickly lose focus and are easily sidetracked)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often are you unable to play or engage in leisurely activities quietly?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you lose, misplace or damage something that is necessary in order to get things done (e.g., your phone, eyeglasses, paperwork, wallet, keys, etc.)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you have difficulty waiting your turn, such as while waiting in line?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you feel like you are "on the go," acting as if you are "driven by a motor" (e.g., you are unable to be or uncomfortable being still for an extended period of time, such as in a restaurant or a meeting)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you leave your seat in situations when remaining seated is expected (e.g., leaving your place in the office or workplace)?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: `How often do you blurt out an answer before a question has been completed (e.g., completing another person's sentence or can't wait your turn in a conversation)?`,
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you fidget with or tap your hands or feet, or squirm in your seat?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do find yourself talking excessively?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you feel restless -- like you want to get out and do something?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'How often do you interrupt or intrude on others, such as butting into their conversation or taking over what others are doing?',
        answerOptions: [
            { answerText: 'Often', howOften: 'Often' },
            { answerText: 'Sometimes', howOften: 'Sometimes' },
            { answerText: 'Rarely', howOften: 'Rarely' }, 
            { answerText: 'Never', howOften: 'Never' },
        ],
    },
    {
        questionText: 'Were several of the symptoms present prior to age 12?',
        answerOptions: [
            { answerText: 'Yes', howOften: 'Yes' },
            { answerText: 'No', howOften: 'No' },
        ],
    },
    {
        questionText: 'Do the symptoms appear in at least two or more settings (e.g., at home and school)?',
        answerOptions: [
            { answerText: 'Yes', howOften: 'Yes' },
            { answerText: 'No', howOften: 'No' },
        ],
    },
]

export default questions