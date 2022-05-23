// 在最近的项目开发当中遇到了一个问题，就是我需要根据上一轮的state进行一些业务处理，如果是在class中这个很好实现，但是在hooks中该怎么获取呢。
// 最终我在React的官方文档中找到了对应的答案。我们可以通过ref来保存上一轮获取到的state，代码如下

function Counter() {
    const [count, setCount] = useState(0);

    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;

    return <h1>Now: {count}, before: {prevCount}</h1>;
}

// 为了方便复用我们可以把它封装成一个hooks进行使用：
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

//我们知道在react中useEffect中的操作表现的像是异步的，就是说每次执行useEffect代码块的时候都会将它放到一个链表中，
//等到同步的代码执行完成后再统一执行链表中的内容。所以此时useRef中的值还没有被修改，还是保存的上一轮的值，所以能够被访问到。