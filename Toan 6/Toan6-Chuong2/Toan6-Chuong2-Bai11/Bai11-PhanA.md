# Bài 11. Ước chung, ước chung lớn nhất — Kiến thức trọng tâm

## Giới thiệu

Bài học giúp học sinh nhận biết **ước chung**, **ước chung lớn nhất** của hai hay nhiều số tự nhiên khác `0`; biết tìm ước chung lớn nhất bằng cách liệt kê các ước hoặc phân tích các số ra thừa số nguyên tố.

Từ kiến thức về ước chung lớn nhất, học sinh có thể tìm toàn bộ các ước chung, nhận biết hai số nguyên tố cùng nhau, rút gọn phân số về phân số tối giản và giải các bài toán chia đều trong thực tế.

---

## 1. Mục tiêu bài học

Sau bài học, học sinh cần đạt được các mục tiêu sau:

1. Nhận biết được **ước chung** của hai hay nhiều số tự nhiên khác `0`.
2. Xác định được **ước chung lớn nhất** của hai hay nhiều số tự nhiên.
3. Sử dụng đúng các kí hiệu `ƯC(a, b)` và `ƯCLN(a, b)`.
4. Tìm được `ƯCLN` bằng cách liệt kê các ước hoặc phân tích các số ra thừa số nguyên tố.
5. Tìm được tập hợp các ước chung thông qua các ước của `ƯCLN`.
6. Nhận biết được hai số nguyên tố cùng nhau và phân số tối giản.
7. Vận dụng `ƯCLN` để rút gọn phân số và giải các bài toán chia đều, cắt đoạn, xếp hàng trong thực tế.

---

## 2. Ghi nhớ cốt lõi

### Ước chung

**Ước chung của hai hay nhiều số** là ước của tất cả các số đó.

Kí hiệu:

- `ƯC(a, b)` là tập hợp các ước chung của `a` và `b`.
- `ƯC(a, b, c)` là tập hợp các ước chung của `a`, `b` và `c`.

Ví dụ:

- `Ư(18) = {1; 2; 3; 6; 9; 18}`.
- `Ư(30) = {1; 2; 3; 5; 6; 10; 15; 30}`.

Các số `1; 2; 3; 6` vừa là ước của `18`, vừa là ước của `30`, nên:

`ƯC(18, 30) = {1; 2; 3; 6}`.

### Ước chung lớn nhất

**Ước chung lớn nhất của hai hay nhiều số** là số lớn nhất trong tập hợp các ước chung của các số đó.

Kí hiệu:

`ƯCLN(a, b)` là ước chung lớn nhất của `a` và `b`.

Từ ví dụ trên, số lớn nhất trong `ƯC(18, 30)` là `6`, nên:

`ƯCLN(18, 30) = 6`.

> **Chú ý:** Trong bài học này, ta xét ước chung của các số tự nhiên khác `0`.

---

## 3. Kí hiệu và cách đọc

| Kí hiệu | Cách đọc | Ý nghĩa |
|---|---|---|
| `ƯC(a, b)` | Ước chung của `a` và `b` | Một tập hợp |
| `ƯCLN(a, b)` | Ước chung lớn nhất của `a` và `b` | Một số |
| `x ∈ ƯC(a, b)` | `x` thuộc tập hợp ước chung của `a` và `b` | `a ⋮ x` và `b ⋮ x` |
| `ƯCLN(a, b) = d` | Ước chung lớn nhất của `a`, `b` bằng `d` | `d` là ước chung lớn nhất |

> **Phân biệt:** `ƯC(a, b)` là **tập hợp**, còn `ƯCLN(a, b)` là **một số**.

---

## 4. Tìm ƯCLN bằng cách liệt kê các ước

### Các bước thực hiện

1. Viết tập hợp các ước của từng số.
2. Chọn các số xuất hiện trong tất cả các tập hợp ước để lập tập hợp ước chung.
3. Chọn số lớn nhất trong tập hợp ước chung.

### Ví dụ

Tìm `ƯCLN(24, 28)`.

Ta có:

- `Ư(24) = {1; 2; 3; 4; 6; 8; 12; 24}`.
- `Ư(28) = {1; 2; 4; 7; 14; 28}`.

Suy ra:

`ƯC(24, 28) = {1; 2; 4}`.

Vậy:

`ƯCLN(24, 28) = 4`.

---

## 5. Một số trường hợp đặc biệt

### Trường hợp 1. Số nhỏ nhất là ước của các số còn lại

Nếu `a ⋮ b` thì:

`ƯCLN(a, b) = b`.

Ví dụ:

Vì `18 ⋮ 6` nên:

`ƯCLN(6, 18) = 6`.

### Trường hợp 2. Một trong các số bằng `1`

Với mọi số tự nhiên `a` khác `0`:

`ƯCLN(a, 1) = 1`.

Ví dụ:

`ƯCLN(25, 1) = 1`.

### Hai số nguyên tố cùng nhau

Hai số có `ƯCLN` bằng `1` được gọi là **hai số nguyên tố cùng nhau**.

Ví dụ:

`ƯCLN(8, 15) = 1`, nên `8` và `15` là hai số nguyên tố cùng nhau.

> Hai số nguyên tố cùng nhau không nhất thiết đều là số nguyên tố.

---

## 6. Tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố

Muốn tìm `ƯCLN` của hai hay nhiều số lớn hơn `1`, ta thực hiện ba bước:

1. Phân tích mỗi số ra thừa số nguyên tố.
2. Chọn các thừa số nguyên tố chung.
3. Lập tích các thừa số đã chọn, mỗi thừa số lấy với **số mũ nhỏ nhất**. Tích đó là `ƯCLN` cần tìm.

### Ví dụ 1

Tìm `ƯCLN(24, 60)`.

Ta có:

- `24 = 2^3 · 3`.
- `60 = 2^2 · 3 · 5`.

Các thừa số nguyên tố chung là `2` và `3`.

- Số mũ nhỏ nhất của `2` là `2`.
- Số mũ nhỏ nhất của `3` là `1`.

Vậy:

`ƯCLN(24, 60) = 2^2 · 3 = 12`.

### Ví dụ 2

Tìm `ƯCLN(56, 140, 168)`.

Ta có:

- `56 = 2^3 · 7`.
- `140 = 2^2 · 5 · 7`.
- `168 = 2^3 · 3 · 7`.

Các thừa số nguyên tố chung là `2` và `7`.

- Số mũ nhỏ nhất của `2` là `2`.
- Số mũ nhỏ nhất của `7` là `1`.

Vậy:

`ƯCLN(56, 140, 168) = 2^2 · 7 = 28`.

---

## 7. Tìm ước chung từ ước chung lớn nhất

Mọi ước chung của các số đều là ước của `ƯCLN` của các số đó.

Do đó, để tìm `ƯC` của hai hay nhiều số, ta có thể:

1. Tìm `ƯCLN` của các số đó.
2. Tìm tập hợp các ước của `ƯCLN` vừa tìm được.

### Ví dụ

Tìm `ƯC(75, 105, 120)`.

Ta có:

- `75 = 3 · 5^2`.
- `105 = 3 · 5 · 7`.
- `120 = 2^3 · 3 · 5`.

Suy ra:

`ƯCLN(75, 105, 120) = 3 · 5 = 15`.

Các ước của `15` là `1; 3; 5; 15`.

Vậy:

`ƯC(75, 105, 120) = {1; 3; 5; 15}`.

---

## 8. Rút gọn phân số về phân số tối giản

Ta rút gọn phân số bằng cách chia cả tử và mẫu cho một ước chung khác `1` của chúng.

Phân số `a/b` được gọi là **phân số tối giản** nếu `a` và `b` không có ước chung nào khác `1`, tức là:

`ƯCLN(a, b) = 1`.

Muốn đưa phân số `a/b` về phân số tối giản, ta chia cả tử và mẫu cho `ƯCLN(a, b)`.

### Ví dụ

Rút gọn phân số `18/30` về phân số tối giản.

Ta có:

`ƯCLN(18, 30) = 6`.

Do đó:

`18/30 = (18 : 6)/(30 : 6) = 3/5`.

Vì `ƯCLN(3, 5) = 1`, nên `3/5` là phân số tối giản.

---

## 9. Ví dụ thực tế có hướng dẫn

### Ví dụ 1. Cắt các thanh gỗ

Hai tấm gỗ dài `18 dm` và `30 dm` được cắt thành các thanh ngắn có cùng độ dài, không để thừa gỗ. Tìm độ dài lớn nhất của mỗi thanh.

Độ dài mỗi thanh phải là ước chung của `18` và `30`. Độ dài lớn nhất là:

`ƯCLN(18, 30) = 6`.

Vậy mỗi thanh gỗ dài nhất là `6 dm`.

### Ví dụ 2. Xếp hàng đều

Ba trung đội có lần lượt `24`, `28` và `36` chiến sĩ. Cần xếp thành các hàng dọc sao cho mỗi trung đội có cùng số hàng và không ai bị lẻ hàng. Tìm số hàng nhiều nhất.

Số hàng phải là ước chung của `24`, `28`, `36`. Số hàng nhiều nhất là:

`ƯCLN(24, 28, 36) = 4`.

Vậy có thể xếp nhiều nhất `4` hàng dọc.

---

## 10. Sơ đồ tư duy mini

- **Ước chung** → ước của tất cả các số.
- **ƯCLN** → số lớn nhất trong các ước chung.
- **Liệt kê ước** → tìm từng tập hợp ước → chọn phần chung → lấy số lớn nhất.
- **Phân tích thừa số nguyên tố** → chọn thừa số chung → lấy số mũ nhỏ nhất.
- **Tìm ƯC** → tìm các ước của `ƯCLN`.
- **Hai số nguyên tố cùng nhau** → `ƯCLN = 1`.
- **Phân số tối giản** → tử và mẫu có `ƯCLN = 1`.
- **Bài toán thực tế** → chia đều, cắt dài nhất, xếp nhiều nhóm hoặc nhiều hàng nhất.

---

## 11. Tự kiểm tra nhanh

### Câu 1

Tìm `ƯCLN(20, 30)`.

**Đáp án:**

`ƯC(20, 30) = {1; 2; 5; 10}`, nên `ƯCLN(20, 30) = 10`.

### Câu 2

Tìm `ƯCLN(36, 84)` bằng cách phân tích ra thừa số nguyên tố.

**Đáp án:**

- `36 = 2^2 · 3^2`.
- `84 = 2^2 · 3 · 7`.

Vậy:

`ƯCLN(36, 84) = 2^2 · 3 = 12`.

### Câu 3

Phân số `16/10` đã tối giản chưa? Nếu chưa, hãy rút gọn.

**Đáp án:**

`ƯCLN(16, 10) = 2`, nên phân số chưa tối giản.

`16/10 = 8/5`.

Vì `ƯCLN(8, 5) = 1`, nên `8/5` là phân số tối giản.

---

## 12. Những lỗi học sinh dễ mắc

- Nhầm `ƯC(a, b)` là một số thay vì một tập hợp.
- Nhầm `ƯCLN(a, b)` là tập hợp thay vì một số.
- Khi phân tích ra thừa số nguyên tố, chọn cả những thừa số không chung.
- Lấy số mũ lớn nhất thay vì số mũ nhỏ nhất khi tìm `ƯCLN`.
- Quên kiểm tra trường hợp một số là ước của số còn lại.
- Cho rằng hai số nguyên tố cùng nhau thì cả hai số đều phải là số nguyên tố.
- Rút gọn phân số nhưng chưa chia tử và mẫu cho `ƯCLN`, dẫn đến phân số chưa tối giản.
