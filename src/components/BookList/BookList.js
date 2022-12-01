import React, { useState, useEffect } from "react";
import BookService from "../../services/bookService";
import Helper from '../../services/helper';
import Loading from "../Loading/Loading";

function BookList() {

    const [state, setState] = useState({
        loading: false,
        books: [],
        errorMessage: ""
    });

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resBooks = await BookService.getBooks();
                setState({
                    ...state,
                    loading: false,
                    books: resBooks.data
                })
            }
            getData();
        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }
    }, []);

    const { loading, books } = state;

    return (
        <>
            <section className="create-book my-2">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <h3 className="me-2">Book Manager</h3>
                        <button className="btn btn-success btn-sm">
                            <i className="fa fa-circle-plus me-2"></i>
                            New
                        </button>
                    </div>
                    <p className="fst-italic">Ad occaecat adipisicing et nostrud occaecat ex Lorem id magna laborum aute ullamco. Non dolore aute culpa reprehenderit aliquip elit adipisicing aliqua officia excepteur.</p>
                    <div>
                        <form className="d-flex w-25">
                            <input type="text" className="form-control" />
                            <button className="btn btn-outline-secondary btn-sm ms-2">Search</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="list-books mt-4">
                <div className="container">
                    <div className="row">
                        {
                            loading ? <Loading /> : (
                                books.map(book => (
                                    <div className="col-md-4 mb-4" key={book.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-3">
                                                        <img className="rounded photo-md" src={book.photo} alt={book.photo} />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                Book name : <span className="fw-bold">{book.bookName}</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                Author : <span className="fw-bold">{book.author}</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                Price : <span className="fw-bold text-danger">{Helper.formatCurrency(book.price)}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="d-flex flex-column align-items-center">
                                                            <button className="btn btn-warning btn-sm">
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                            <button className="btn btn-primary btn-sm my-3">
                                                                <i className="fa fa-edit"></i>
                                                            </button>
                                                            <button className="btn btn-danger btn-sm">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookList;