import {ConfigDto} from "./src/interface/dto/config.dto";
import {ConfigConverter} from "./src/util/converter/config.converter";
import defaultFineFormula from "./src/util/defaultFineFormula";

const config: ConfigDto = {
    subtitle: `${new Date().getFullYear()} EOS 겨울방학`,
    title: "아찔한 잔디심기",
    icon: "plant.png",
    globalStartDate: "2025-01-01",
    globalDueDate: null,
    users: [
        {
            name : '정재훈',
            id: 'affection-jh',
            startDate: '2025-01-01',
            paid : 0,
            timeoff : ['2024-12-25'],
            
        }
        ,{
            name : '노영진',
            id: 'yyoungjin',
            startDate: '2025-01-01',
            paid:0,
            timeoff:['2024-12-25']
        }
        ,{
           
            name : '신영빈',
            id: 'youngbi',
            startDate: '2025-01-01',
            paid:0,
            timeoff:['2024-12-25'] 
        }
       
    ],
    fineFormula: defaultFineFormula,
}


export default ConfigConverter.toConfig(config)