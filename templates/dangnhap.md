# Đăng nhập và đăng kí học sinh

## Mục đích

Phần **đăng nhập và đăng kí học sinh** giúp học sinh tạo tài khoản cá nhân để truy cập vào hệ thống học tập trực tuyến. Sau khi đăng kí thành công, học sinh có thể đăng nhập để học bài, làm luyện tập, kiểm tra đánh giá và theo dõi tiến độ học tập của mình.

---

## 1. Thông tin học sinh cần đăng kí

| Trường thông tin | Kiểu dữ liệu | Bắt buộc | Gợi ý hiển thị |
|---|---|---|---|
| Tên đăng nhập | Văn bản ngắn | Có | Nhập tên đăng nhập |
| Trường | Văn bản | Có | Nhập tên trường |
| Lớp | Văn bản ngắn | Có | Ví dụ: `6/1`, `6A`, `6B` |
| Email | Email | Có | Nhập email học sinh hoặc phụ huynh |
| Mật khẩu | Mật khẩu | Có | Nhập mật khẩu |
| Xác nhận mật khẩu | Mật khẩu | Có | Nhập lại mật khẩu |

---

## 2. Bố cục giao diện đề xuất

Thiết kế thành một thẻ đăng nhập/đăng kí ở giữa màn hình, nền sáng, bo góc mềm mại, thân thiện với học sinh.

```text
┌──────────────────────────────────────┐
│        ĐĂNG KÍ TÀI KHOẢN HỌC SINH    │
│                                      │
│  Tên đăng nhập:  ..................  │
│  Trường:         ..................  │
│  Lớp:            ..................  │
│  Email:          ..................  │
│  Mật khẩu:       ..................  │
│  Xác nhận MK:    ..................  │
│                                      │
│        [ ĐĂNG KÍ ]                   │
│                                      │
│  Đã có tài khoản? Đăng nhập          │
└──────────────────────────────────────┘
```

---

## 3. Màn hình đăng kí

### Tiêu đề

**ĐĂNG KÍ TÀI KHOẢN HỌC SINH**

### Mô tả ngắn

Tạo tài khoản để bắt đầu học tập, luyện tập và theo dõi tiến độ học của em.

### Các ô nhập thông tin

1. **Tên đăng nhập**

   Gợi ý nhập:

   `Ví dụ: nguyenvana6`

2. **Trường**

   Gợi ý nhập:

   `Ví dụ: THCS Thị Trấn 2`

3. **Lớp**

   Gợi ý nhập:

   `Ví dụ: 6/1`

4. **Email**

   Gợi ý nhập:

   `Ví dụ: hocsinh@email.com`

5. **Mật khẩu**

   Gợi ý nhập:

   `Nhập mật khẩu`

6. **Xác nhận mật khẩu**

   Gợi ý nhập:

   `Nhập lại mật khẩu`

### Nút thao tác

`ĐĂNG KÍ`

### Liên kết phụ

`Đã có tài khoản? Đăng nhập`

---

## 4. Màn hình đăng nhập

Sau khi học sinh đã đăng kí tài khoản, học sinh có thể đăng nhập để vào học.

```text
┌──────────────────────────────────────┐
│              ĐĂNG NHẬP               │
│                                      │
│  Tên đăng nhập hoặc Email: ......... │
│  Mật khẩu:                 ......... │
│                                      │
│        [ ĐĂNG NHẬP ]                 │
│                                      │
│  Chưa có tài khoản? Đăng kí ngay     │
└──────────────────────────────────────┘
```

### Thông tin đăng nhập

| Trường thông tin | Gợi ý |
|---|---|
| Tên đăng nhập hoặc Email | Nhập tên đăng nhập hoặc email đã đăng kí |
| Mật khẩu | Nhập mật khẩu đã tạo |

### Nút thao tác

`ĐĂNG NHẬP`

### Liên kết phụ

`Chưa có tài khoản? Đăng kí ngay`

---

## 5. Quy trình hoạt động

### Bước 1. Học sinh đăng kí tài khoản

Học sinh nhập đầy đủ các thông tin:

- Tên đăng nhập.
- Trường.
- Lớp.
- Email.
- Mật khẩu.
- Xác nhận mật khẩu.

Sau đó bấm nút:

`ĐĂNG KÍ`

---

### Bước 2. Hệ thống kiểm tra thông tin

Hệ thống cần kiểm tra:

- Không bỏ trống thông tin bắt buộc.
- Email đúng định dạng.
- Mật khẩu và xác nhận mật khẩu trùng nhau.
- Tên đăng nhập chưa bị sử dụng.

---

### Bước 3. Đăng kí thành công

Sau khi đăng kí thành công, hiển thị thông báo:

> Đăng kí tài khoản thành công! Em có thể đăng nhập để bắt đầu học tập.

Học sinh được chuyển sang màn hình đăng nhập.

---

### Bước 4. Học sinh đăng nhập

Học sinh nhập:

- Tên đăng nhập hoặc email.
- Mật khẩu.

Sau đó bấm:

`ĐĂNG NHẬP`

---

### Bước 5. Vào trang học tập

Nếu đăng nhập thành công, học sinh được chuyển đến trang học tập chính.

Ví dụ:

`Toan6-Chuong1-MucLuc.html`

Tại đây học sinh có thể chọn bài học:

- Bài 1. Tập hợp.
- Bài 2. Cách ghi số tự nhiên.
- Bài 3. Thứ tự trong tập hợp các số tự nhiên.
- Bài 4. Phép cộng và phép trừ số tự nhiên.
- Bài 5. Phép nhân và phép chia số tự nhiên.
- Bài 6. Lũy thừa với số mũ tự nhiên.
- Bài 7. Thứ tự thực hiện các phép tính.
- Ôn tập Chương 1.

---

## 6. Thông báo gợi ý

### Khi đăng kí thành công

> Chúc mừng em! Tài khoản đã được tạo thành công. Hãy đăng nhập để bắt đầu học nhé!

### Khi thiếu thông tin

> Em vui lòng nhập đầy đủ thông tin trước khi đăng kí.

### Khi email chưa đúng định dạng

> Email chưa đúng định dạng. Em hãy kiểm tra lại nhé!

### Khi mật khẩu không trùng khớp

> Mật khẩu xác nhận chưa trùng khớp. Em hãy nhập lại.

### Khi đăng nhập thành công

> Đăng nhập thành công! Chào mừng em quay lại lớp học trực tuyến.

### Khi đăng nhập sai

> Tên đăng nhập hoặc mật khẩu chưa đúng. Em hãy kiểm tra lại thông tin.

---

## 7. Yêu cầu bảo mật

- Mật khẩu không hiển thị trực tiếp khi học sinh nhập.
- Không lưu mật khẩu ở dạng văn bản thường.
- Nên mã hóa hoặc băm mật khẩu trước khi lưu trữ.
- Không chia sẻ thông tin tài khoản của học sinh.
- Có thể thêm nút “Hiện/ẩn mật khẩu” để học sinh dễ kiểm tra khi nhập.

---

## 8. Gợi ý thiết kế giao diện

| Thành phần | Gợi ý thiết kế |
|---|---|
| Nền trang | Xanh nhạt hoặc nền học tập vui tươi |
| Khung đăng nhập | Nền trắng, bo góc lớn, đổ bóng nhẹ |
| Tiêu đề | Màu xanh dương, chữ đậm |
| Ô nhập | Bo góc, viền xanh nhạt |
| Nút chính | Màu xanh dương hoặc cam, chữ trắng |
| Biểu tượng | Học sinh, quyển sách, ổ khóa, ngôi sao |
| Thông báo | Ngắn gọn, thân thiện, dễ hiểu |

---

## 9. Prompt tạo giao diện trên Canva AI

Tạo giao diện đăng kí và đăng nhập học sinh cho nền tảng học Toán trực tuyến. Phong cách hiện đại, thân thiện với học sinh THCS, màu xanh dương và cam tươi sáng, nền học tập vui nhộn. Màn hình đăng kí gồm các ô: Tên đăng nhập, Trường, Lớp, Email, Mật khẩu, Xác nhận mật khẩu và nút “ĐĂNG KÍ”. Màn hình đăng nhập gồm ô Tên đăng nhập hoặc Email, Mật khẩu và nút “ĐĂNG NHẬP”. Thiết kế bo góc mềm mại, có biểu tượng quyển sách, ổ khóa, học sinh, ngôi sao. Sau khi đăng nhập thành công, học sinh được chuyển vào trang học tập.

---

## 10. Dữ liệu mẫu

| Trường dữ liệu | Giá trị mẫu |
|---|---|
| `username` | nguyenvana6 |
| `school` | THCS Thị Trấn 2 |
| `class` | 6/1 |
| `email` | hocsinh@email.com |
| `password` | ******** |
| `confirm_password` | ******** |
| `redirect_after_login` | `Toan6-Chuong1-MucLuc.html` |

---

## 11. Nội dung nút và liên kết

| Thành phần | Nội dung |
|---|---|
| Nút đăng kí | `ĐĂNG KÍ` |
| Nút đăng nhập | `ĐĂNG NHẬP` |
| Liên kết sang đăng nhập | `Đã có tài khoản? Đăng nhập` |
| Liên kết sang đăng kí | `Chưa có tài khoản? Đăng kí ngay` |
| Trang chuyển đến sau đăng nhập | `Toan6-Chuong1-MucLuc.html` |
