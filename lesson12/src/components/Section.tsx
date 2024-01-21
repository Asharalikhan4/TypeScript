import { ReactNode } from 'react';

// Old way of writing components
// export const Section: React.FC<{ title: string }> = ({ children, title}) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }

type SectionProps = {
    title?: string;
    children: ReactNode
}

export const Section = ({ children, title = "My SubHeading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}