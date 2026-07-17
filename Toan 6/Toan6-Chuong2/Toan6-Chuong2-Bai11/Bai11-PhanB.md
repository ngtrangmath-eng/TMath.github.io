# Bài 11. Ước chung, ước chung lớn nhất — Luyện tập

## Mục đích

Phần luyện tập giúp học sinh củng cố khái niệm **ước chung**, **ước chung lớn nhất**; thực hành tìm `ƯCLN` bằng nhiều phương pháp, tìm ước chung từ `ƯCLN`, rút gọn phân số và vận dụng vào các bài toán thực tế.

---

## 1. Bảng kiến thức cần dùng

| Nội dung | Ghi nhớ |
|---|---|
| Ước chung | Ước của tất cả các số đã cho |
| Ước chung lớn nhất | Số lớn nhất trong tập hợp các ước chung |
| Kí hiệu | `ƯC(a, b)` là một tập hợp; `ƯCLN(a, b)` là một số |
| Tìm `ƯCLN` bằng phân tích thừa số nguyên tố | Chọn các thừa số nguyên tố chung, mỗi thừa số lấy số mũ nhỏ nhất |
| Tìm `ƯC` | Tìm các ước của `ƯCLN` |
| Hai số nguyên tố cùng nhau | Có `ƯCLN` bằng `1` |
| Phân số tối giản | Tử và mẫu có `ƯCLN` bằng `1` |

---

## 2. Bài tập tìm ước chung bằng cách liệt kê

### Bài 1

Tìm `Ư(24)`, `Ư(28)`, `ƯC(24, 28)` và `ƯCLN(24, 28)`.

### Đáp án gợi ý

- `Ư(24) = {1; 2; 3; 4; 6; 8; 12; 24}`.
- `Ư(28) = {1; 2; 4; 7; 14; 28}`.
- `ƯC(24, 28) = {1; 2; 4}`.
- `ƯCLN(24, 28) = 4`.

---

### Bài 2

Tìm `ƯC(18, 30)` và `ƯCLN(18, 30)`.

### Đáp án gợi ý

- `Ư(18) = {1; 2; 3; 6; 9; 18}`.
- `Ư(30) = {1; 2; 3; 5; 6; 10; 15; 30}`.
- `ƯC(18, 30) = {1; 2; 3; 6}`.
- `ƯCLN(18, 30) = 6`.

---

## 3. Bài tập trường hợp đặc biệt

Tính nhanh:

1. `ƯCLN(6, 18)`.
2. `ƯCLN(90, 10)`.
3. `ƯCLN(35, 1)`.
4. `ƯCLN(72, 24)`.

### Đáp án gợi ý

1. Vì `18 ⋮ 6` nên `ƯCLN(6, 18) = 6`.
2. Vì `90 ⋮ 10` nên `ƯCLN(90, 10) = 10`.
3. `ƯCLN(35, 1) = 1`.
4. Vì `72 ⋮ 24` nên `ƯCLN(72, 24) = 24`.

---

## 4. Bài tập tìm ƯCLN bằng phân tích ra thừa số nguyên tố

### Bài 1

Tìm `ƯCLN` của các cặp số sau:

1. `36` và `84`.
2. `45` và `150`.
3. `72` và `120`.

### Đáp án gợi ý

1. `36 = 2^2 · 3^2`, `84 = 2^2 · 3 · 7`.

   `ƯCLN(36, 84) = 2^2 · 3 = 12`.

2. `45 = 3^2 · 5`, `150 = 2 · 3 · 5^2`.

   `ƯCLN(45, 150) = 3 · 5 = 15`.

3. `72 = 2^3 · 3^2`, `120 = 2^3 · 3 · 5`.

   `ƯCLN(72, 120) = 2^3 · 3 = 24`.

---

### Bài 2

Tìm `ƯCLN(56, 140, 168)`.

### Đáp án gợi ý

- `56 = 2^3 · 7`.
- `140 = 2^2 · 5 · 7`.
- `168 = 2^3 · 3 · 7`.

Các thừa số nguyên tố chung là `2` và `7`; số mũ nhỏ nhất của `2` là `2`.

Vậy:

`ƯCLN(56, 140, 168) = 2^2 · 7 = 28`.

---

## 5. Bài tập tìm ước chung từ ƯCLN

### Bài 1

Biết `ƯCLN(75, 105) = 15`. Hãy tìm `ƯC(75, 105)`.

### Đáp án gợi ý

Các ước của `15` là `1; 3; 5; 15`.

Vậy:

`ƯC(75, 105) = {1; 3; 5; 15}`.

---

### Bài 2

Tìm `ƯC(48, 72, 120)`.

### Đáp án gợi ý

Ta có:

`ƯCLN(48, 72, 120) = 24`.

Các ước của `24` là:

`1; 2; 3; 4; 6; 8; 12; 24`.

Vậy:

`ƯC(48, 72, 120) = {1; 2; 3; 4; 6; 8; 12; 24}`.

---

## 6. Hai số nguyên tố cùng nhau

Trong các cặp số sau, cặp nào là hai số nguyên tố cùng nhau?

1. `8` và `15`.
2. `12` và `18`.
3. `14` và `25`.
4. `21` và `35`.

### Đáp án gợi ý

1. `ƯCLN(8, 15) = 1` nên `8` và `15` nguyên tố cùng nhau.
2. `ƯCLN(12, 18) = 6` nên không nguyên tố cùng nhau.
3. `ƯCLN(14, 25) = 1` nên `14` và `25` nguyên tố cùng nhau.
4. `ƯCLN(21, 35) = 7` nên không nguyên tố cùng nhau.

---

## 7. Rút gọn phân số về phân số tối giản

Rút gọn các phân số sau:

1. `18/30`.
2. `42/56`.
3. `75/105`.
4. `84/126`.

### Đáp án gợi ý

1. `ƯCLN(18, 30) = 6`, nên `18/30 = 3/5`.
2. `ƯCLN(42, 56) = 14`, nên `42/56 = 3/4`.
3. `ƯCLN(75, 105) = 15`, nên `75/105 = 5/7`.
4. `ƯCLN(84, 126) = 42`, nên `84/126 = 2/3`.

---

## 8. Bài toán thực tế

### Bài thực tế 1. Chia bóng cho các bạn

Bố có `12` quả bóng màu xanh và `15` quả bóng màu đỏ. Bố muốn chia đều số bóng cho một số bạn sao cho mỗi bạn nhận số bóng xanh như nhau và số bóng đỏ như nhau.

1. Có thể chia đều cho `3` bạn không?
2. Có thể chia nhiều nhất cho bao nhiêu bạn?
3. Khi chia nhiều nhất, mỗi bạn nhận bao nhiêu bóng xanh và bao nhiêu bóng đỏ?

### Đáp án gợi ý

1. Vì `12 ⋮ 3` và `15 ⋮ 3`, nên có thể chia đều cho `3` bạn.
2. Số bạn nhiều nhất là `ƯCLN(12, 15) = 3`.
3. Mỗi bạn nhận `12 : 3 = 4` bóng xanh và `15 : 3 = 5` bóng đỏ.

---

### Bài thực tế 2. Chia nhóm lao động

Lớp 6A có `40` học sinh nữ và `36` học sinh nam tham gia thu gom rác. Cần chia thành các nhóm sao cho số học sinh nữ ở mỗi nhóm bằng nhau, số học sinh nam ở mỗi nhóm bằng nhau và số nhóm là nhiều nhất.

1. Chia được nhiều nhất bao nhiêu nhóm?
2. Mỗi nhóm có bao nhiêu học sinh nữ và bao nhiêu học sinh nam?

### Đáp án gợi ý

Số nhóm nhiều nhất là:

`ƯCLN(40, 36) = 4`.

Mỗi nhóm có:

- `40 : 4 = 10` học sinh nữ.
- `36 : 4 = 9` học sinh nam.

---

### Bài thực tế 3. Cắt các tấm gỗ

Hai tấm gỗ dài `18 dm` và `30 dm` được cắt thành các thanh có cùng độ dài, không để thừa. Tìm độ dài lớn nhất của mỗi thanh và số thanh cắt được từ mỗi tấm gỗ.

### Đáp án gợi ý

Độ dài lớn nhất của mỗi thanh là:

`ƯCLN(18, 30) = 6 dm`.

Số thanh cắt được:

- Tấm `18 dm`: `18 : 6 = 3` thanh.
- Tấm `30 dm`: `30 : 6 = 5` thanh.

---

### Bài thực tế 4. Xếp hàng trong lễ diễu hành

Ba trung đội có `24`, `28` và `36` chiến sĩ. Mỗi trung đội được xếp thành cùng một số hàng dọc sao cho không ai bị lẻ hàng. Tìm số hàng nhiều nhất và số chiến sĩ trong mỗi hàng của từng trung đội.

### Đáp án gợi ý

Số hàng nhiều nhất là:

`ƯCLN(24, 28, 36) = 4`.

Số chiến sĩ trong mỗi hàng:

- Trung đội I: `24 : 4 = 6` chiến sĩ.
- Trung đội II: `28 : 4 = 7` chiến sĩ.
- Trung đội III: `36 : 4 = 9` chiến sĩ.

---

## 9. Bài tập sửa sai

Bạn An tìm `ƯCLN(36, 84)` như sau:

- `36 = 2^2 · 3^2`.
- `84 = 2^2 · 3 · 7`.
- An chọn các thừa số chung `2`, `3` và lấy số mũ lớn nhất, nên viết `ƯCLN(36, 84) = 2^2 · 3^2 = 36`.

Bạn An sai ở đâu? Hãy sửa lại.

### Đáp án gợi ý

An sai vì khi tìm `ƯCLN`, mỗi thừa số nguyên tố chung phải lấy với **số mũ nhỏ nhất**, không phải số mũ lớn nhất.

Do đó:

`ƯCLN(36, 84) = 2^2 · 3 = 12`.

---

## 10. Thử thách nhỏ

Tìm số tự nhiên lớn nhất `x` sao cho `56 ⋮ x`, `84 ⋮ x` và `140 ⋮ x`.

### Đáp án gợi ý

Số lớn nhất thỏa mãn là:

`x = ƯCLN(56, 84, 140)`.

- `56 = 2^3 · 7`.
- `84 = 2^2 · 3 · 7`.
- `140 = 2^2 · 5 · 7`.

Vậy:

`x = 2^2 · 7 = 28`.

---

## 11. Gợi ý củng cố sau luyện tập

- Khi số nhỏ nhất chia hết các số còn lại, `ƯCLN` chính là số nhỏ nhất đó.
- Khi phân tích ra thừa số nguyên tố, chỉ chọn các thừa số chung và lấy số mũ nhỏ nhất.
- Muốn tìm toàn bộ ước chung, hãy tìm các ước của `ƯCLN`.
- Trong bài toán “chia nhiều nhất”, “xếp nhiều hàng nhất” hoặc “cắt đoạn dài nhất”, thường cần tìm `ƯCLN`.
- Muốn rút gọn phân số nhanh về tối giản, chia cả tử và mẫu cho `ƯCLN` của chúng.
