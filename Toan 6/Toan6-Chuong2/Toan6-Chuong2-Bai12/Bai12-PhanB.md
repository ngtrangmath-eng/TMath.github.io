# Bài 12. Bội chung, bội chung nhỏ nhất — Luyện tập

## Mục đích

Phần luyện tập giúp học sinh củng cố khái niệm **bội chung**, **bội chung nhỏ nhất**; thực hành tìm `BCNN` bằng nhiều phương pháp, tìm bội chung từ `BCNN`, quy đồng mẫu số và vận dụng vào các bài toán thực tế có tính chu kì.

---

## 1. Bảng kiến thức cần dùng

| Nội dung | Ghi nhớ |
|---|---|
| Bội chung | Bội của tất cả các số đã cho |
| Bội chung nhỏ nhất | Số nhỏ nhất khác `0` trong tập hợp các bội chung |
| Kí hiệu | `BC(a, b)` là một tập hợp; `BCNN(a, b)` là một số |
| Tìm `BCNN` bằng phân tích thừa số nguyên tố | Chọn các thừa số nguyên tố chung và riêng, mỗi thừa số lấy số mũ lớn nhất |
| Tìm `BC` | Tìm các bội của `BCNN` |
| Trường hợp đặc biệt | Nếu `a ⋮ b` thì `BCNN(a, b) = a` |
| Quy đồng mẫu | Thường chọn `BCNN` của các mẫu làm mẫu chung |

---

## 2. Bài tập tìm bội chung bằng cách liệt kê

### Bài 1

Tìm `B(6)`, `B(9)`, `BC(6, 9)` và `BCNN(6, 9)`.

### Đáp án gợi ý

- `B(6) = {0; 6; 12; 18; 24; 30; 36; 42; 48; 54; ...}`.
- `B(9) = {0; 9; 18; 27; 36; 45; 54; ...}`.
- `BC(6, 9) = {0; 18; 36; 54; ...}`.
- `BCNN(6, 9) = 18`.

---

### Bài 2

Tìm `BC(4, 6)` và `BCNN(4, 6)`.

### Đáp án gợi ý

- `B(4) = {0; 4; 8; 12; 16; 20; 24; ...}`.
- `B(6) = {0; 6; 12; 18; 24; ...}`.
- `BC(4, 6) = {0; 12; 24; 36; ...}`.
- `BCNN(4, 6) = 12`.

---

## 3. Bài tập trường hợp đặc biệt

Tính nhanh:

1. `BCNN(7, 21)`.
2. `BCNN(36, 9)`.
3. `BCNN(25, 1)`.
4. `BCNN(8, 15)`.

### Đáp án gợi ý

1. Vì `21 ⋮ 7` nên `BCNN(7, 21) = 21`.
2. Vì `36 ⋮ 9` nên `BCNN(36, 9) = 36`.
3. `BCNN(25, 1) = 25`.
4. Vì `ƯCLN(8, 15) = 1`, nên `BCNN(8, 15) = 8 · 15 = 120`.

---

## 4. Bài tập tìm BCNN bằng phân tích ra thừa số nguyên tố

### Bài 1

Tìm `BCNN` của các cặp số sau:

1. `12` và `18`.
2. `15` và `54`.
3. `24` và `90`.

### Đáp án gợi ý

1. `12 = 2^2 · 3`, `18 = 2 · 3^2`.

   `BCNN(12, 18) = 2^2 · 3^2 = 36`.

2. `15 = 3 · 5`, `54 = 2 · 3^3`.

   `BCNN(15, 54) = 2 · 3^3 · 5 = 270`.

3. `24 = 2^3 · 3`, `90 = 2 · 3^2 · 5`.

   `BCNN(24, 90) = 2^3 · 3^2 · 5 = 360`.

---

### Bài 2

Tìm `BCNN(18, 24, 40)`.

### Đáp án gợi ý

- `18 = 2 · 3^2`.
- `24 = 2^3 · 3`.
- `40 = 2^3 · 5`.

Các thừa số nguyên tố cần chọn là `2`, `3`, `5`; số mũ lớn nhất tương ứng là `3`, `2`, `1`.

Vậy:

`BCNN(18, 24, 40) = 2^3 · 3^2 · 5 = 360`.

---

## 5. Bài tập tìm bội chung từ BCNN

### Bài 1

Biết `BCNN(8, 6) = 24`. Hãy tìm các bội chung của `8` và `6` nhỏ hơn `100`.

### Đáp án gợi ý

Các bội của `24` nhỏ hơn `100` là:

`0; 24; 48; 72; 96`.

Vậy:

`BC(8, 6)` nhỏ hơn `100` gồm `0; 24; 48; 72; 96`.

---

### Bài 2

Tìm các bội chung dương nhỏ hơn `1 000` của `15` và `54`.

### Đáp án gợi ý

Ta có:

`BCNN(15, 54) = 270`.

Các bội dương của `270` nhỏ hơn `1 000` là:

`270; 540; 810`.

---

## 6. Quan hệ giữa ƯCLN và BCNN

Tính `BCNN` của các cặp số sau bằng công thức:

`ƯCLN(a, b) · BCNN(a, b) = a · b`.

1. `a = 24`, `b = 36`, biết `ƯCLN(24, 36) = 12`.
2. `a = 18`, `b = 30`, biết `ƯCLN(18, 30) = 6`.
3. `a = 35`, `b = 42`, biết `ƯCLN(35, 42) = 7`.

### Đáp án gợi ý

1. `BCNN(24, 36) = (24 · 36) : 12 = 72`.
2. `BCNN(18, 30) = (18 · 30) : 6 = 90`.
3. `BCNN(35, 42) = (35 · 42) : 7 = 210`.

---

## 7. Quy đồng mẫu số và tính phân số

### Bài 1

Quy đồng mẫu các cặp phân số sau:

1. `5/8` và `7/12`.
2. `7/9` và `4/15`.
3. `3/10` và `5/18`.

### Đáp án gợi ý

1. `BCNN(8, 12) = 24`.

   `5/8 = 15/24`, `7/12 = 14/24`.

2. `BCNN(9, 15) = 45`.

   `7/9 = 35/45`, `4/15 = 12/45`.

3. `BCNN(10, 18) = 90`.

   `3/10 = 27/90`, `5/18 = 25/90`.

---

### Bài 2

Thực hiện phép tính:

1. `1/4 + 1/6`.
2. `11/12 - 3/8`.
3. `5/9 + 7/15`.

### Đáp án gợi ý

1. `BCNN(4, 6) = 12`.

   `1/4 + 1/6 = 3/12 + 2/12 = 5/12`.

2. `BCNN(12, 8) = 24`.

   `11/12 - 3/8 = 22/24 - 9/24 = 13/24`.

3. `BCNN(9, 15) = 45`.

   `5/9 + 7/15 = 25/45 + 21/45 = 46/45`.

---

## 8. Bài toán thực tế

### Bài thực tế 1. Mua đĩa và cốc giấy

Đĩa giấy được đóng thành từng gói `4` cái, cốc giấy được đóng thành từng gói `6` cái. Mai muốn mua cùng một số lượng đĩa và cốc, không mua lẻ và số lượng mỗi loại là ít nhất.

1. Mai cần mua ít nhất bao nhiêu đĩa và bao nhiêu cốc?
2. Mai phải mua bao nhiêu gói mỗi loại?

### Đáp án gợi ý

Số lượng nhỏ nhất của mỗi loại là:

`BCNN(4, 6) = 12`.

Vậy Mai mua:

- `12 : 4 = 3` gói đĩa.
- `12 : 6 = 2` gói cốc.

---

### Bài thực tế 2. Lịch bảo dưỡng máy

Máy A được bảo dưỡng định kì `6` tháng một lần, máy B được bảo dưỡng định kì `9` tháng một lần. Hai máy vừa được bảo dưỡng cùng lúc vào tháng `5`.

1. Sau ít nhất bao nhiêu tháng hai máy lại được bảo dưỡng cùng lúc?
2. Khi đó là tháng nào, năm nào nếu thời điểm ban đầu là tháng 5 năm 2026?

### Đáp án gợi ý

Khoảng thời gian ngắn nhất là:

`BCNN(6, 9) = 18` tháng.

Sau `18` tháng kể từ tháng 5 năm 2026 là tháng 11 năm 2027.

---

### Bài thực tế 3. Các tuyến xe buýt

Ba tuyến xe buýt lần lượt xuất bến sau mỗi `15` phút, `9` phút và `10` phút. Lúc `10 giờ 35 phút`, cả ba tuyến cùng xuất bến.

1. Sau ít nhất bao nhiêu phút cả ba tuyến lại cùng xuất bến?
2. Khi đó là mấy giờ?

### Đáp án gợi ý

Ta có:

`BCNN(15, 9, 10) = 90` phút.

`10 giờ 35 phút + 90 phút = 12 giờ 05 phút`.

---

### Bài thực tế 4. Đèn tín hiệu nhấp nháy

Ba đèn tín hiệu lần lượt nhấp nháy sau mỗi `8` giây, `12` giây và `18` giây. Lúc đầu cả ba đèn cùng sáng.

1. Sau ít nhất bao nhiêu giây cả ba đèn lại cùng sáng?
2. Trong `5` phút đầu tiên, không tính thời điểm ban đầu, cả ba đèn cùng sáng bao nhiêu lần?

### Đáp án gợi ý

Ta có:

- `8 = 2^3`.
- `12 = 2^2 · 3`.
- `18 = 2 · 3^2`.

`BCNN(8, 12, 18) = 2^3 · 3^2 = 72` giây.

`5` phút = `300` giây.

Các thời điểm cùng sáng trong `300` giây là `72`, `144`, `216`, `288` giây.

Vậy cả ba đèn cùng sáng lại `4` lần.

---

## 9. Bài tập sửa sai

Bạn Bình tìm `BCNN(24, 90)` như sau:

- `24 = 2^3 · 3`.
- `90 = 2 · 3^2 · 5`.
- Bình chọn các thừa số chung `2`, `3` và lấy số mũ nhỏ nhất, nên viết `BCNN(24, 90) = 2 · 3 = 6`.

Bạn Bình sai ở đâu? Hãy sửa lại.

### Đáp án gợi ý

Bình sai vì khi tìm `BCNN`, phải chọn **tất cả các thừa số nguyên tố chung và riêng**, mỗi thừa số lấy với **số mũ lớn nhất**.

Do đó:

`BCNN(24, 90) = 2^3 · 3^2 · 5 = 360`.

---

## 10. Thử thách nhỏ

Tìm số tự nhiên nhỏ nhất khác `0` là bội của `18`, `24` và `30`.

### Đáp án gợi ý

Số cần tìm là:

`BCNN(18, 24, 30)`.

- `18 = 2 · 3^2`.
- `24 = 2^3 · 3`.
- `30 = 2 · 3 · 5`.

Vậy:

`BCNN(18, 24, 30) = 2^3 · 3^2 · 5 = 360`.

---

## 11. Gợi ý củng cố sau luyện tập

- Khi số lớn nhất chia hết cho các số còn lại, `BCNN` chính là số lớn nhất đó.
- Khi phân tích ra thừa số nguyên tố, chọn cả thừa số chung và riêng, lấy số mũ lớn nhất.
- Muốn tìm bội chung, hãy tìm các bội của `BCNN`.
- Trong bài toán “cùng xảy ra sớm nhất”, “mua số lượng ít nhất” hoặc “lặp lại cùng lúc”, thường cần tìm `BCNN`.
- Khi quy đồng mẫu số, chọn `BCNN` của các mẫu thường giúp phép tính ngắn gọn nhất.
