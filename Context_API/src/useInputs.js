import { useState, useCallback } from 'react';

// 커스텀 Hook 만들어서 사용하기
function useInputs(initialForm) {
    const [form, setForm] =useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name] : value}));
    }, []);

    // 위 Form 을 초기화
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;