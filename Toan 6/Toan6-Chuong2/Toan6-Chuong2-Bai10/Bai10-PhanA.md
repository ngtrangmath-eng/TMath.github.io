# Bài 10. Số nguyên tố — Kiến thức trọng tâm

## Giới thiệu

Bài học giúp học sinh nhận biết **số nguyên tố**, **hợp số** và biết phân tích một số tự nhiên lớn hơn `1` ra **thừa số nguyên tố** trong những trường hợp đơn giản.

Thông qua bài học, học sinh biết dựa vào **số ước** của một số tự nhiên để phân loại số đó là số nguyên tố hay hợp số, đồng thời sử dụng dấu hiệu chia hết đã học để phân tích số thành tích các thừa số nguyên tố.

---

## 1. Mục tiêu bài học

Sau bài học, học sinh cần đạt được các mục tiêu sau:

1. Nhận biết được khái niệm **số nguyên tố** và **hợp số**.
2. Xác định được một số tự nhiên lớn hơn `1` là số nguyên tố hay hợp số trong những trường hợp đơn giản.
3. Biết rằng số `0` và số `1` không là số nguyên tố và cũng không là hợp số.
4. Phân tích được một số tự nhiên lớn hơn `1` ra thừa số nguyên tố bằng **sơ đồ cây** hoặc **sơ đồ cột**.
5. Vận dụng được số nguyên tố, hợp số vào một số tình huống thực tế như chia nhóm, xếp đồ vật, chọn vị trí hoặc kiểm tra mã số.

---

## 2. Ghi nhớ cốt lõi

### Số nguyên tố

**Số nguyên tố** là số tự nhiên lớn hơn `1`, chỉ có **hai ước** là `1` và chính nó.

Ví dụ:

- `2` là số nguyên tố vì các ước của `2` là `1; 2`.
- `3` là số nguyên tố vì các ước của `3` là `1; 3`.
- `11` là số nguyên tố vì các ước của `11` là `1; 11`.

### Hợp số

**Hợp số** là số tự nhiên lớn hơn `1`, có **nhiều hơn hai ước**.

Ví dụ:

- `4` là hợp số vì các ước của `4` là `1; 2; 4`.
- `10` là hợp số vì các ước của `10` là `1; 2; 5; 10`.
- `15` là hợp số vì các ước của `15` là `1; 3; 5; 15`.

> **Lưu ý quan trọng:** Số `0` và số `1` không là số nguyên tố và cũng không là hợp số.

---

## 3. Bảng phân loại nhanh

| Số | Các ước | Số ước | Kết luận |
|---:|---|---:|---|
| `2` | `1; 2` | `2` | Số nguyên tố |
| `3` | `1; 3` | `2` | Số nguyên tố |
| `4` | `1; 2; 4` | `3` | Hợp số |
| `5` | `1; 5` | `2` | Số nguyên tố |
| `6` | `1; 2; 3; 6` | `4` | Hợp số |
| `7` | `1; 7` | `2` | Số nguyên tố |
| `8` | `1; 2; 4; 8` | `4` | Hợp số |
| `9` | `1; 3; 9` | `3` | Hợp số |
| `10` | `1; 2; 5; 10` | `4` | Hợp số |
| `11` | `1; 11` | `2` | Số nguyên tố |

---

## 4. Cách nhận biết số nguyên tố và hợp số

### Bước 1. Kiểm tra số đã cho có lớn hơn `1` không

- Nếu số là `0` hoặc `1`, kết luận ngay: không là số nguyên tố và không là hợp số.
- Nếu số lớn hơn `1`, tiếp tục kiểm tra số ước.

### Bước 2. Tìm các ước của số đó

Ta có thể lần lượt chia số đó cho các số tự nhiên nhỏ hơn hoặc bằng chính nó để tìm ước.

### Bước 3. Kết luận

- Nếu chỉ có hai ước là `1` và chính nó → số nguyên tố.
- Nếu có nhiều hơn hai ước → hợp số.

Ví dụ:

- `17` chỉ có hai ước là `1; 17`, nên `17` là số nguyên tố.
- `1975` có chữ số tận cùng là `5` nên chia hết cho `5`. Ngoài `1` và `1975`, số `1975` còn có ước là `5`, nên `1975` là hợp số.

---

## 5. Phân tích một số ra thừa số nguyên tố

**Phân tích một số tự nhiên lớn hơn `1` ra thừa số nguyên tố** là viết số đó dưới dạng một tích các thừa số nguyên tố.

Ví dụ:

`24 = 2 · 2 · 2 · 3 = 2^3 · 3`.

Trong đó `2` và `3` là các thừa số nguyên tố.

> Khi phân tích một số ra thừa số nguyên tố, ta thường viết các thừa số nguyên tố theo thứ tự từ bé đến lớn và viết tích các thừa số giống nhau dưới dạng lũy thừa.

---

## 6. Hai phương pháp phân tích thường dùng

### Phương pháp 1. Phân tích theo sơ đồ cây

Ta tách số đã cho thành tích của hai số. Nếu một thừa số chưa phải là số nguyên tố, tiếp tục tách cho đến khi tất cả các thừa số ở cuối nhánh đều là số nguyên tố.

Ví dụ:

`24 = 4 · 6 = 2 · 2 · 2 · 3`.

Vậy:

`24 = 2^3 · 3`.

### Phương pháp 2. Phân tích theo sơ đồ cột

Ta lần lượt chia số đã cho cho các số nguyên tố nhỏ nhất có thể: `2`, `3`, `5`, `7`, ... cho đến khi thương bằng `1`.

Ví dụ, phân tích `70`:

```text
70 | 2
35 | 5
 7 | 7
 1 |
```

Vậy:

`70 = 2 · 5 · 7`.

---

## 7. Ví dụ mẫu có hướng dẫn

### Ví dụ 1. Nhận biết số nguyên tố và hợp số

**Đề bài:** Số nào dưới đây là số nguyên tố, số nào là hợp số? Vì sao?

`1975; 17`

### Cách làm

- Số `1975` có chữ số tận cùng là `5` nên `1975 ⋮ 5`. Do đó, ngoài hai ước là `1` và `1975`, số `1975` còn có thêm ước là `5`. Vậy `1975` là hợp số.
- Số `17` chỉ có hai ước là `1` và `17`. Vậy `17` là số nguyên tố.

---

### Ví dụ 2. Phân tích theo sơ đồ cột

**Đề bài:** Phân tích số `70` ra thừa số nguyên tố theo sơ đồ cột.

### Cách làm

```text
70 | 2
35 | 5
 7 | 7
 1 |
```

Các thừa số nguyên tố nhận được là `2`, `5`, `7`.

Vậy:

`70 = 2 · 5 · 7`.

---

### Ví dụ 3. Phân tích số lớn hơn

**Đề bài:** Số `945` có là số nguyên tố hay không? Nếu không, hãy phân tích số `945` ra thừa số nguyên tố.

### Cách làm

Theo dấu hiệu chia hết cho `5`, ta thấy `945 ⋮ 5` nên `945` là hợp số.

Phân tích `945` theo sơ đồ cột:

```text
945 | 3
315 | 3
105 | 3
 35 | 5
  7 | 7
  1 |
```

Vậy:

`945 = 3^3 · 5 · 7`.

---

## 8. Sơ đồ tư duy mini

- **Số nguyên tố** → lớn hơn `1` → chỉ có hai ước: `1` và chính nó.
- **Hợp số** → lớn hơn `1` → có nhiều hơn hai ước.
- **0 và 1** → không là số nguyên tố, không là hợp số.
- **Phân tích ra thừa số nguyên tố** → viết số dưới dạng tích các số nguyên tố.
- **Sơ đồ cây** → tách dần thành tích.
- **Sơ đồ cột** → chia lần lượt cho các số nguyên tố nhỏ nhất.

---

## 9. Tự kiểm tra nhanh

### Câu 1

Số `23` là số nguyên tố hay hợp số?

**Đáp án:**  
`23` là số nguyên tố vì chỉ có hai ước là `1` và `23`.

### Câu 2

Số `30` là số nguyên tố hay hợp số?

**Đáp án:**  
`30` là hợp số vì `30` có nhiều hơn hai ước, chẳng hạn `1; 2; 3; 5; 6; 10; 15; 30`.

### Câu 3

Phân tích `36` ra thừa số nguyên tố.

**Đáp án:**  
`36 = 2 · 2 · 3 · 3 = 2^2 · 3^2`.

---

## 10. Những lỗi học sinh dễ mắc

- Nhầm số `1` là số nguyên tố.
- Quên rằng số `2` là số nguyên tố chẵn duy nhất.
- Kết luận một số là số nguyên tố khi mới chỉ thấy số đó không chia hết cho `2` hoặc `5`.
- Khi phân tích ra thừa số nguyên tố, dừng lại khi còn thừa số chưa phải số nguyên tố.
- Quên viết các thừa số giống nhau dưới dạng lũy thừa khi cần trình bày gọn.
