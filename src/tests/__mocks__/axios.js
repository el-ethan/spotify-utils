const axios = {
    post: jest.fn().mockImplementation(() => Promise.resolve({data: {}}))
}

module.exports = axios