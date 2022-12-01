import axios from 'axios';
import { BOOKS_API } from './common';

class BookService {
    static getBooks() {
        return axios.get(BOOKS_API)
    }
}

export default BookService;