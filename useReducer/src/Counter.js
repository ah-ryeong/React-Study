import React, {useReducer} from 'react';

// useReducer : 상태를 업데이트
// useState와 차이점 : action 객체를 기반으로 상태 업데이트
// action : 업데이트 할 때 참조하는 객체 
// dispatch({ type: 'INCREMENT' });
// 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능, 다른 파일에 작성 후 불러 올 수 있음
// function reducer(state, action) {
//         switch(action.type) {
                // case 'INCENTMENT' : 
                //     return state + 1;
                // case 'DECREMENT' :
                //     return state - 1;
                // default :
                //     return state;
//        }
// }
// useReducer 사용법 
// const [number, dispatch ] = useReducer(reducer, 0);

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default :
        throw new Error('Unhandled action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () =>{
        dispatch({
            type: 'INCREMENT'
        })
    };

    const onDecrease = () => {
        dispatch({ 
            type: 'DECREMENT'
        })
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;