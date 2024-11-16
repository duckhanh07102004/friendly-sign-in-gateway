export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admin_profiles: {
        Row: {
          id: string
          created_at: string
        }
        Insert: {
          id: string
          created_at?: string
        }
        Update: {
          id?: string
          created_at?: string
        }
      }
      contracts: {
        Row: {
          id: number
          submitted_at: string
          updated_at: string
          movie_title: string
          company_name: string
          company_address: string | null
          representative_name: string
          representative_position: string | null
          phone: string | null
          email: string | null
          distribution_type: string
          rental_start_date: string
          rental_end_date: string
          service_fee: number | null
          payment_method: string | null
          status_id: number | null
          admin_notes: string | null
          reviewed_by: string | null
        }
        Insert: {
          id?: number
          submitted_at?: string
          updated_at?: string
          movie_title: string
          company_name: string
          company_address?: string | null
          representative_name: string
          representative_position?: string | null
          phone?: string | null
          email?: string | null
          distribution_type: string
          rental_start_date: string
          rental_end_date: string
          service_fee?: number | null
          payment_method?: string | null
          status_id?: number | null
          admin_notes?: string | null
          reviewed_by?: string | null
        }
        Update: {
          id?: number
          submitted_at?: string
          updated_at?: string
          movie_title?: string
          company_name?: string
          company_address?: string | null
          representative_name?: string
          representative_position?: string | null
          phone?: string | null
          email?: string | null
          distribution_type?: string
          rental_start_date?: string
          rental_end_date?: string
          service_fee?: number | null
          payment_method?: string | null
          status_id?: number | null
          admin_notes?: string | null
          reviewed_by?: string | null
        }
      }
      contract_status: {
        Row: {
          id: number
          status_name: string
        }
        Insert: {
          id?: number
          status_name: string
        }
        Update: {
          id?: number
          status_name?: string
        }
      }
      biendich: {
        Row: {
          chucvu: string | null
          id_biendich: number
          ngonngu: string | null
          ten: string | null
        }
        Insert: {
          chucvu?: string | null
          id_biendich: number
          ngonngu?: string | null
          ten?: string | null
        }
        Update: {
          chucvu?: string | null
          id_biendich?: number
          ngonngu?: string | null
          ten?: string | null
        }
        Relationships: []
      }
      bophanbanphim: {
        Row: {
          chucvu: string | null
          id_banphim: number
          ten: string | null
        }
        Insert: {
          chucvu?: string | null
          id_banphim: number
          ten?: string | null
        }
        Update: {
          chucvu?: string | null
          id_banphim?: number
          ten?: string | null
        }
        Relationships: []
      }
      bophankhaithac: {
        Row: {
          chucvu: string | null
          id_khaithac: number
          ten: string | null
        }
        Insert: {
          chucvu?: string | null
          id_khaithac: number
          ten?: string | null
        }
        Update: {
          chucvu?: string | null
          id_khaithac?: number
          ten?: string | null
        }
        Relationships: []
      }
      giaodich: {
        Row: {
          chitietgiaodich: string | null
          giatien: number | null
          id_banphim: number
          id_giaodich: number
          taikhoan: string
        }
        Insert: {
          chitietgiaodich?: string | null
          giatien?: number | null
          id_banphim: number
          id_giaodich: number
          taikhoan: string
        }
        Update: {
          chitietgiaodich?: string | null
          giatien?: number | null
          id_banphim?: number
          id_giaodich?: number
          taikhoan?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_giaodich_banphim"
            columns: ["id_banphim"]
            isOneToOne: false
            referencedRelation: "bophanbanphim"
            referencedColumns: ["id_banphim"]
          },
          {
            foreignKeyName: "fk_giaodich_khachhang"
            columns: ["taikhoan"]
            isOneToOne: false
            referencedRelation: "khachhang"
            referencedColumns: ["taikhoan"]
          },
        ]
      }
      hopdong: {
        Row: {
          chitiethopdong: string | null
          id_khaithac: number
          id_nsx: number
          ngaytaohd: string | null
        }
        Insert: {
          chitiethopdong?: string | null
          id_khaithac: number
          id_nsx: number
          ngaytaohd?: string | null
        }
        Update: {
          chitiethopdong?: string | null
          id_khaithac?: number
          id_nsx?: number
          ngaytaohd?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_hopdong_khaithac"
            columns: ["id_khaithac"]
            isOneToOne: false
            referencedRelation: "bophankhaithac"
            referencedColumns: ["id_khaithac"]
          },
          {
            foreignKeyName: "fk_hopdong_nsx"
            columns: ["id_nsx"]
            isOneToOne: false
            referencedRelation: "nhasanxuat"
            referencedColumns: ["id_nsx"]
          },
        ]
      }
      khachhang: {
        Row: {
          email: string | null
          lienhe: string | null
          loaihinh: string | null
          taikhoan: string
          tenkhachhang: string | null
        }
        Insert: {
          email?: string | null
          lienhe?: string | null
          loaihinh?: string | null
          taikhoan: string
          tenkhachhang?: string | null
        }
        Update: {
          email?: string | null
          lienhe?: string | null
          loaihinh?: string | null
          taikhoan?: string
          tenkhachhang?: string | null
        }
        Relationships: []
      }
      nhasanxuat: {
        Row: {
          id_nsx: number
          loaihinh: string | null
          tennsx: string | null
        }
        Insert: {
          id_nsx: number
          loaihinh?: string | null
          tennsx?: string | null
        }
        Update: {
          id_nsx?: number
          loaihinh?: string | null
          tennsx?: string | null
        }
        Relationships: []
      }
      phim: {
        Row: {
          chiphibanquyen: number | null
          id_biendich: number
          id_khaithac: number
          id_nsx: number
          id_phim: number
          id_theloai: number
          ngayphathanh: string | null
          sotap: number | null
          tenphim: string | null
        }
        Insert: {
          chiphibanquyen?: number | null
          id_biendich: number
          id_khaithac: number
          id_nsx: number
          id_phim: number
          id_theloai: number
          ngayphathanh?: string | null
          sotap?: number | null
          tenphim?: string | null
        }
        Update: {
          chiphibanquyen?: number | null
          id_biendich?: number
          id_khaithac?: number
          id_nsx?: number
          id_phim?: number
          id_theloai?: number
          ngayphathanh?: string | null
          sotap?: number | null
          tenphim?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_phim_biendich"
            columns: ["id_biendich"]
            isOneToOne: false
            referencedRelation: "biendich"
            referencedColumns: ["id_biendich"]
          },
          {
            foreignKeyName: "fk_phim_khaithac"
            columns: ["id_khaithac"]
            isOneToOne: false
            referencedRelation: "bophankhaithac"
            referencedColumns: ["id_khaithac"]
          },
          {
            foreignKeyName: "fk_phim_nsx"
            columns: ["id_nsx"]
            isOneToOne: false
            referencedRelation: "nhasanxuat"
            referencedColumns: ["id_nsx"]
          },
          {
            foreignKeyName: "fk_phim_theloai"
            columns: ["id_theloai"]
            isOneToOne: false
            referencedRelation: "theloai"
            referencedColumns: ["id_theloai"]
          },
        ]
      }
      profiles: {
        Row: {
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      theloai: {
        Row: {
          id_theloai: number
          tentheloai: string | null
        }
        Insert: {
          id_theloai: number
          tentheloai?: string | null
        }
        Update: {
          id_theloai?: number
          tentheloai?: string | null
        }
        Relationships: []
      }
      voucher: {
        Row: {
          giam: number
          id_voucher: number
          taikhoan: string
        }
        Insert: {
          giam: number
          id_voucher: number
          taikhoan: string
        }
        Update: {
          giam?: number
          id_voucher?: number
          taikhoan?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_voucher_khachhang"
            columns: ["taikhoan"]
            isOneToOne: false
            referencedRelation: "khachhang"
            referencedColumns: ["taikhoan"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
