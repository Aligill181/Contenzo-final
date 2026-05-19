# Security Specification - Contenzo

## Data Invariants
1. A listing must have a valid seller who is a registered user with a 'SELLER' or 'ADMIN' role.
2. An order must reference a valid listing and a buyer.
3. A user can only read their own private profile (PII).
4. Listings are public for reading (if approved), but only owners can edit.
5. Users cannot modify their own roles or wallet balances directly.

## The Dirty Dozen Payloads (Rejection Targets)
1. **Balance Injection**: A user tries to update their `walletBalance` to 1,000,000.
2. **Role Escalation**: A buyer tries to update their `role` to 'ADMIN'.
3. **Orphaned Listing**: Creating a listing with a `sellerId` that doesn't match the current user's UID.
4. **Price Manipulation**: Updating an order's `price` after it has been created.
5. **Unauthorized Fulfillment**: A non-seller trying to update an order's `status` to 'DELIVERED'.
6. **Shadow Fields**: Creating a listing with undocumented fields like `isPlatformOfficial: true`.
7. **Identity Spoofing**: Sending a message with a `senderId` belonging to another user.
8. **Malicious ID**: Using a 2KB string as a `listingId`.
9. **Spam Metric**: Setting a `dr` score of 500 (valid range 0-100).
10. **PII Leak**: A user trying to `get` another user's private document.
11. **Outcome Shortcutting**: A seller trying to set an order status to 'COMPLETED' (only buyers or system should do this).
12. **Future Timestamp**: Setting `createdAt` to a time in the future.

## Test Runner Plan
- `firestore.rules.test.ts` will verify that all the above payloads result in `PERMISSION_DENIED`.
