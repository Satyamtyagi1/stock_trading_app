# Stock Trading App - Complete Testing Guide

## Prerequisites
- Backend running on http://localhost:5000
- Frontend running on http://localhost:3000
- MongoDB connected

## Test Scenarios

### 1. User Registration & Authentication

#### Test Case 1.1: Successful Registration
1. Go to http://localhost:3000/register
2. Fill in:
   - Name: "Test User"
   - Email: "testuser@example.com"
   - Password: "password123"
3. Click Register
4. **Expected Result**: 
   - Redirect to dashboard
   - Token saved in localStorage
   - Initial balance: $100,000

#### Test Case 1.2: Duplicate Email Registration
1. Try registering with same email as Test 1.1
2. **Expected Result**: Error message "User already exists"

#### Test Case 1.3: Login Success
1. Go to http://localhost:3000/login
2. Use credentials from Test 1.1
3. **Expected Result**: Successfully logged in, redirect to dashboard

#### Test Case 1.4: Login with Wrong Password
1. Try login with correct email but wrong password
2. **Expected Result**: Error message "Invalid credentials"

---

### 2. Stock Management

#### Test Case 2.1: View All Stocks
1. Login and go to dashboard
2. Scroll through stocks section
3. **Expected Result**: Display grid of available stocks with price

#### Test Case 2.2: Search Functionality
1. Enter "AAPL" in search box
2. Click Search
3. **Expected Result**: Filter shows only Apple stock

#### Test Case 2.3: Search by Company Name
1. Enter "Apple" in search box
2. Click Search
3. **Expected Result**: Shows stocks matching "Apple" name

---

### 3. Trading Operations

#### Test Case 3.1: Buy Stock - Success
1. Select a stock from the grid
2. Enter quantity: 5
3. Click "Buy Stock"
4. **Expected Result**:
   - Success message appears
   - Balance decreases by (price × quantity)
   - Stock appears in portfolio

#### Test Case 3.2: Buy Stock - Insufficient Balance
1. Attempt to buy with quantity that exceeds balance
2. **Expected Result**: Error "Insufficient balance"

#### Test Case 3.3: Sell Stock - Success
1. Go to portfolio section
2. Select a stock holding
3. Click "Sell"
4. Enter quantity less than holding
5. **Expected Result**:
   - Stock quantity decreases
   - Balance increases
   - Transaction recorded

#### Test Case 3.4: Sell More than Holdings
1. Try to sell more shares than owned
2. **Expected Result**: Error "Insufficient stock quantity"

---

### 4. Portfolio Management

#### Test Case 4.1: View Portfolio
1. After buying stocks, check portfolio section
2. **Expected Result**: Shows all holdings with:
   - Stock symbol
   - Quantity
   - Average buy price
   - Total invested

#### Test Case 4.2: Portfolio Balance Update
1. Buy and sell multiple times
2. Check total balance
3. **Expected Result**: Balance accurately reflects all transactions

#### Test Case 4.3: Multiple Holdings
1. Buy different stocks
2. View portfolio
3. **Expected Result**: All unique stocks listed separately

---

### 5. Transaction History

#### Test Case 5.1: View Transaction History
Using Postman:
```
GET http://localhost:5000/api/trades/history
Header: Authorization: Bearer {token}
```
**Expected Result**: JSON array of all transactions with:
- userId
- stockId
- type (buy/sell)
- quantity
- price
- totalAmount
- transactionDate

#### Test Case 5.2: Transaction Date Ordering
1. Make multiple transactions
2. Check history
3. **Expected Result**: Transactions ordered by date (newest first)

---

### 6. UI/UX Testing

#### Test Case 6.1: Responsive Design
1. Open app on desktop
2. Resize to mobile view (375px)
3. Resize to tablet view (768px)
4. **Expected Result**: Layout adapts properly

#### Test Case 6.2: Navigation
1. Test logout button
2. **Expected Result**: Redirected to login page, localStorage cleared

#### Test Case 6.3: Error Messages
1. Trigger various errors (empty search, insufficient balance)
2. **Expected Result**: Toast notifications appear clearly

---

### 7. API Testing with Postman

#### Test Case 7.1: Register User via API
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "API User",
  "email": "apiuser@example.com",
  "password": "password123"
}
```
**Expected Result**: 
- Status: 201
- Response includes token and user object

#### Test Case 7.2: Login via API
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "apiuser@example.com",
  "password": "password123"
}
```
**Expected Result**: 
- Status: 200
- Returns JWT token

#### Test Case 7.3: Get All Stocks
```
GET http://localhost:5000/api/stocks
```
**Expected Result**: 
- Status: 200
- Returns array of stocks

#### Test Case 7.4: Buy Stock via API
```
POST http://localhost:5000/api/trades/buy
Authorization: Bearer {token}
Content-Type: application/json

{
  "stockId": "{stock_id}",
  "quantity": 10,
  "price": 150.25
}
```
**Expected Result**:
- Status: 201
- Updated balance and portfolio

---

### 8. Database Testing

#### Test Case 8.1: User Document
Using MongoDB Compass:
```
Database: stock-trading
Collection: users
Query: db.users.findOne()
```
**Expected Result**: Contains fields:
- _id
- name
- email (hashed password)
- role
- balance
- createdAt

#### Test Case 8.2: Transaction Logging
```
Collection: transactions
Query: db.transactions.find()
```
**Expected Result**: All buy/sell operations logged with timestamp

---

### 9. Security Testing

#### Test Case 9.1: Token Validation
1. Try API call with invalid token
2. **Expected Result**: 401 Unauthorized

#### Test Case 9.2: Protected Routes
1. Try accessing /api/trades/portfolio without token
2. **Expected Result**: 401 error

#### Test Case 9.3: Admin Access
1. Try creating stock as regular user
2. **Expected Result**: 403 Forbidden (expecting admin role)

---

### 10. Performance Testing

#### Test Case 10.1: Search Performance
1. Search with multiple characters
2. **Expected Result**: Results returned < 500ms

#### Test Case 10.2: Large Portfolio
1. Buy 100+ different stocks
2. Open portfolio
3. **Expected Result**: Fast rendering

#### Test Case 10.3: Transaction History Load
1. Create 1000+ transactions
2. Fetch history
3. **Expected Result**: API returns < 1s

---

## Automated Test Examples

### Using Jest for Backend

```javascript
// test/auth.test.js
describe('Authentication', () => {
  it('should register user successfully', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });
});
```

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Stocks not loading | Run seed.js or manually add via API |
| CORS errors | Check backend CORS config |
| Login page loops | Clear localStorage |
| API connection timeout | Ensure backend is running on port 5000 |
| MongoDB error | Check MONGO_URI and MongoDB is running |

---

## Test Data Checklist

- [ ] At least 2 test users created
- [ ] 5+ stock symbols added
- [ ] Buy transactions tested
- [ ] Sell transactions tested
- [ ] Portfolio correctly updated
- [ ] Balance calculations verified
- [ ] Transaction history complete
- [ ] Search functionality working
- [ ] UI responsive on all devices
- [ ] Error handling working

---

Done! Your app is production-ready! 🚀
