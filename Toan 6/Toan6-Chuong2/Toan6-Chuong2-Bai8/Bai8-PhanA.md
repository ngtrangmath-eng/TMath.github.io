# Bài 8. Quan hệ chia hết và tính chất — Kiến thức trọng tâm

## Giới thiệu

Bài học giúp học sinh nhận biết **quan hệ chia hết**, sử dụng đúng kí hiệu **chia hết**, **không chia hết**, xác định được **ước**, **bội** và vận dụng các **tính chất chia hết của một tổng, một hiệu** để xét nhanh một biểu thức có chia hết cho một số cho trước hay không.

---

## 1. Mục tiêu bài học

Sau bài học, học sinh cần đạt được các mục tiêu sau:

1. Nhận biết được khi nào một số tự nhiên `a` **chia hết** cho một số tự nhiên `b` khác `0`.
2. Sử dụng đúng các kí hiệu `a ⋮ b` và `a ∤ b`.
3. Xác định được **ước** và **bội** của một số tự nhiên.
4. Tìm được tập hợp các ước của một số tự nhiên nhỏ và tìm được các bội của một số tự nhiên theo yêu cầu.
5. Vận dụng được tính chất chia hết của một tổng, một hiệu để xét tính chia hết mà không cần tính giá trị của tổng hoặc hiệu.

---

## 2. Ghi nhớ cốt lõi

Cho hai số tự nhiên `a` và `b`, với `b ≠ 0`.

Nếu có số tự nhiên `k` sao cho

`a = k · b`

thì ta nói **a chia hết cho b** và kí hiệu là:

`a ⋮ b`

Nếu `a` không chia hết cho `b`, ta kí hiệu là:

`a ∤ b`

Ví dụ:

- `15 ⋮ 3` vì `15 = 5 · 3`.
- `16 ∤ 3` vì không có số tự nhiên `k` nào để `16 = k · 3`.

Nếu `a ⋮ b`, ta nói:

- `b` là **ước** của `a`;
- `a` là **bội** của `b`.

Ví dụ: Vì `15 ⋮ 3` nên `3` là **ước** của `15` và `15` là **bội** của `3`.

> **Lưu ý:** Khi xét `a ⋮ b`, số chia `b` phải khác `0`.

---

## 3. Kí hiệu cần nhớ

| Kí hiệu | Cách đọc | Ví dụ |
|---|---|---|
| `a ⋮ b` | `a` chia hết cho `b` | `24 ⋮ 6` |
| `a ∤ b` | `a` không chia hết cho `b` | `25 ∤ 4` |
| `Ư(a)` | Tập hợp các ước của `a` | `Ư(12) = {1; 2; 3; 4; 6; 12}` |
| `B(b)` | Tập hợp các bội của `b` | `B(5) = {0; 5; 10; 15; 20; ...}` |

---

## 4. Cách tìm ước và bội

### Cách tìm ước của một số

Muốn tìm các ước của `a` với `a > 1`, ta lần lượt chia `a` cho các số tự nhiên từ `1` đến `a`.

Số nào làm cho `a` chia hết thì số đó là một **ước** của `a`.

Ví dụ:

`Ư(12) = {1; 2; 3; 4; 6; 12}`

vì `12` chia hết cho `1`, `2`, `3`, `4`, `6`, `12`.

### Cách tìm bội của một số

Muốn tìm các bội của một số tự nhiên khác `0`, ta nhân số đó lần lượt với:

`0; 1; 2; 3; ...`

Ví dụ:

`B(8) = {0; 8; 16; 24; 32; 40; ...}`

Các bội của `8` nhỏ hơn `80` là:

`0; 8; 16; 24; 32; 40; 48; 56; 64; 72`.

---

## 5. Tính chất chia hết của một tổng, một hiệu

### Tính chất 1: Trường hợp chia hết

Nếu tất cả các số hạng của một tổng đều chia hết cho cùng một số thì tổng chia hết cho số đó.

- Nếu `a ⋮ m` và `b ⋮ m` thì `(a + b) ⋮ m`.
- Nếu `a ⋮ m`, `b ⋮ m` và `c ⋮ m` thì `(a + b + c) ⋮ m`.

Tính chất này cũng đúng với một hiệu.

Ví dụ:

- Vì `30 ⋮ 3` và `18 ⋮ 3` nên `(30 - 18) ⋮ 3`.
- Vì `6 ⋮ 3`, `15 ⋮ 3` và `30 ⋮ 3` nên `(6 + 15 + 30) ⋮ 3`.

### Tính chất 2: Trường hợp không chia hết

Nếu trong một tổng có một số hạng không chia hết cho một số đã cho, còn các số hạng còn lại đều chia hết cho số đó thì tổng không chia hết cho số đó.

- Nếu `a ⋮ m` và `b ∤ m` thì `(a + b) ∤ m`.
- Nếu `a ⋮ m`, `b ⋮ m` và `c ∤ m` thì `(a + b + c) ∤ m`.

Tính chất này cũng đúng với một hiệu.

Ví dụ:

- Vì `45 ⋮ 5` và `7 ∤ 5` nên `(45 - 7) ∤ 5`.
- Vì `5 ⋮ 5`, `45 ⋮ 5` và `2019 ∤ 5` nên `(5 + 45 + 2019) ∤ 5`.

> **Lưu ý quan trọng:** Muốn kết luận một tổng không chia hết theo tính chất trên, cần có đúng tình huống: một số hạng không chia hết, còn các số hạng còn lại đều chia hết cho cùng số đang xét.

---

## 6. Ví dụ mẫu có hướng dẫn

**Đề bài:** Cho tổng

`A = 40 + 48 + 72 + x`, với `x` là số tự nhiên.

Tìm điều kiện của `x` để `A` chia hết cho `4` và để `A` không chia hết cho `4`.

### Cách làm

1. Xét các số hạng đã biết:

   `40 ⋮ 4`, `48 ⋮ 4`, `72 ⋮ 4`.

2. Tổng của ba số hạng đầu chia hết cho `4`.

3. Do đó, tính chia hết của `A` phụ thuộc vào số hạng `x`.

4. Kết luận:

   - Để `A ⋮ 4` thì `x ⋮ 4`.
   - Để `A ∤ 4` thì `x ∤ 4`.

---

## 7. Sơ đồ tư duy mini

- **Chia hết** → `a = k · b`, với `k ∈ ℕ`, `b ≠ 0`.
- **Kí hiệu** → chia hết `⋮`, không chia hết `∤`.
- **Ước** → nếu `a ⋮ b` thì `b` là ước của `a`.
- **Bội** → nếu `a ⋮ b` thì `a` là bội của `b`.
- **Tìm ước** → thử chia từ `1` đến chính số đó.
- **Tìm bội** → nhân lần lượt với `0; 1; 2; 3; ...`.
- **Tổng chia hết** → tất cả số hạng cùng chia hết.
- **Tổng không chia hết** → một số hạng không chia hết, các số hạng còn lại chia hết.

---

## 8. Tự kiểm tra nhanh

### Câu 1

Điền kí hiệu thích hợp:

`24 ... 6`

**Đáp án:**  
`24 ⋮ 6`

Vì `24 = 4 · 6`.

### Câu 2

Tìm tập hợp các ước của `15`.

**Đáp án:**  
`Ư(15) = {1; 3; 5; 15}`

Vì `15` chia hết cho `1`, `3`, `5`, `15`.

### Câu 3

Viết các bội của `6` nhỏ hơn `30`.

**Đáp án:**  
`0; 6; 12; 18; 24`

### Câu 4

Không thực hiện phép tính, hãy cho biết `24 + 48` có chia hết cho `4` không. Vì sao?

**Đáp án:**  
Có. Vì `24 ⋮ 4` và `48 ⋮ 4` nên `(24 + 48) ⋮ 4`.

### Câu 5

Không thực hiện phép tính, hãy cho biết `5 + 45 + 2019` có chia hết cho `5` không. Vì sao?

**Đáp án:**  
Không. Vì `5 ⋮ 5`, `45 ⋮ 5` nhưng `2019 ∤ 5` nên `(5 + 45 + 2019) ∤ 5`.

---

## 9. Những lỗi học sinh dễ mắc

- Nhầm giữa **a chia hết cho b** và **b chia hết cho a**.
- Quên điều kiện `b ≠ 0` khi xét quan hệ chia hết.
- Viết thiếu bội `0` khi liệt kê các bội của một số tự nhiên khác `0`.
- Bỏ sót ước `1` và chính số đó khi tìm tập hợp các ước.
- Áp dụng sai tính chất chia hết của một tổng: chỉ cần một số hạng không chia hết thì chưa đủ kết luận nếu các số hạng còn lại cũng không chia hết.
- Nhầm **ước của a** với **bội của a**.
