import { useEffect, useState } from 'react';
import Loader from '../SharedComponents/Loader/Loader';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    const [loading, setLoading] = useState(true);
    useTitle('Blogs')
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    if (loading === true) {
        return <Loader />
    }
    return (
        <div className='container mx-auto flex justify-center items-center detailsHeight py-16'>
            <div className='space-y-10'>
                <h2 className='text-4xl font-medium text-center'>Development Blogs</h2>
                <div className='lg:w-3/5 md:w-4/5 w-full mx-auto'>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <div className='text-lg'>
                                <ol className='list-decimal pl-5 space-y-3'>
                                    <li><span className='font-medium'>Access Token:</span> An access token is a credential granted to a user or application after successful authentication. It is used to authorize and access specific resources or perform actions. Access tokens are typically short-lived and need to be included in each request to authenticate the user or application.</li>
                                    <li><span className='font-medium'>Refresh Token:</span> A refresh token is a long-lived credential issued during authentication. It is used to obtain a new access token when the current one expires. Refresh tokens enhance user experience by allowing the client to request a new access token without requiring the user to repeatedly provide their credentials.</li>
                                    <li><span className='font-medium'>How they works:</span>
                                        <ol className='list-decimal pl-5 space-y-3'>
                                            <li>Access tokens and refresh tokens work together to facilitate secure authentication and authorization processes.</li>
                                            <li>When a user or application logs in and is authenticated, an access token is issued. This token is then sent with subsequent requests to the server to access protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to reauthenticate.</li>
                                            <li>On the client-side, access tokens and refresh tokens can be stored in various ways. Common approaches include storing them in memory, secure HTTP-only cookies, or browser storage (such as local storage or session storage). The choice depends on the security requirements and nature of the client application.</li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <div className='text-lg space-y-3'>
                                <p>SQL (Structured Query Language) and NoSQL (Not only SQL) are two types of database systems with distinct characteristics.</p>
                                <ol className='list-decimal pl-5 space-y-3'>
                                    <li><span className='font-medium'>SQL:</span> SQL databases use a structured data model and schema, employing tables with predefined columns and relationships between them. They ensure strong data consistency and support complex queries using SQL. SQL databases are ideal for applications requiring structured and transactional data, such as financial systems.</li>
                                    <li><span className='font-medium'>NoSQL:</span> In contrast, NoSQL databases use a flexible, schema-less data model, allowing for dynamic and unstructured data storage. They provide high scalability, availability, and performance. NoSQL databases are well-suited for handling large volumes of varied data, such as in big data and real-time applications.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is express js and Nest JS?
                        </div>
                        <div className="collapse-content">
                            <ol className='list-decimal pl-5 text-lg space-y-3'>
                                <li><span className='font-medium'>Express JS:</span> Express.js is a popular and lightweight web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. With Express.js, developers can easily define routes, handle requests and responses, and implement middleware for various functionalities. It has a rich ecosystem of plugins and extensions, allowing developers to add additional features as needed. Express.js is widely used due to its simplicity and scalability, making it suitable for both small and large-scale applications.</li>
                                <li><span className='font-medium'>Nest JS:</span> NestJS, on the other hand, is a progressive and opinionated framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and leverages TypeScript to enhance development productivity and maintainability. NestJS follows the modular architecture pattern and provides features such as dependency injection, decorators, and modules. It encourages the use of object-oriented programming and allows developers to easily build complex applications using modular, reusable components. NestJS is known for its robustness, scalability, and support for building enterprise-level applications.</li>
                            </ol>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content space-y-3 text-lg">
                            <p>In MongoDB, the aggregate framework is a powerful tool for performing advanced data processing and analysis tasks. It allows you to perform complex operations on data within a collection, such as filtering, grouping, sorting, joining, and transforming documents.</p>
                            <p>The aggregation pipeline is the core concept of MongoDB aggregate framework. It consists of multiple stages, each representing a specific operation. These stages are executed in sequence, with the output of one stage serving as the input for the next. The aggregation pipeline includes stages like $match (filtering documents), $group (grouping documents), $sort (sorting documents), $project (selecting specific fields), and more.</p>
                            <p>By chaining together these stages, you can construct sophisticated queries to perform data aggregations and calculations, generating meaningful insights from your data in a flexible and efficient manner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;