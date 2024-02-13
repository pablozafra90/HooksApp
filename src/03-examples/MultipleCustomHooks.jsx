import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    // console.log({ data, isLoading, hasError });

    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            { isLoading 
            ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
            : (
                <>
                    <blockquote className="blockquote text-right text-end">
                        <p className="mb-1">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>

                    <button className="btn btn-primary" onClick={ () => { increment } }>Next Quote</button>
                </>
            )} 
        </>
    )

}
