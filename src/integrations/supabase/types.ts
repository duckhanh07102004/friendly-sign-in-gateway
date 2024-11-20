export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_profiles: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      baocao: {
        Row: {
          id_banphim: number
          id_baocao: number
          id_biendich: number
          id_khaithac: number
          ngaytao: string | null
          noidung: string | null
        }
        Insert: {
          id_banphim: number
          id_baocao: number
          id_biendich: number
          id_khaithac: number
          ngaytao?: string | null
          noidung?: string | null
        }
        Update: {
          id_banphim?: number
          id_baocao?: number
          id_biendich?: number
          id_khaithac?: number
          ngaytao?: string | null
          noidung?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_baocao_banphim"
            columns: ["id_banphim"]
            isOneToOne: false
            referencedRelation: "bophanbanphim"
            referencedColumns: ["id_banphim"]
          },
          {
            foreignKeyName: "fk_baocao_biendich"
            columns: ["id_biendich"]
            isOneToOne: false
            referencedRelation: "biendich"
            referencedColumns: ["id_biendich"]
          },
          {
            foreignKeyName: "fk_baocao_khaithac"
            columns: ["id_khaithac"]
            isOneToOne: false
            referencedRelation: "bophankhaithac"
            referencedColumns: ["id_khaithac"]
          },
        ]
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
        Relationships: []
      }
      contracts: {
        Row: {
          admin_notes: string | null
          company_address: string | null
          company_name: string
          distribution_type: string
          email: string | null
          id: number
          movie_title: string
          notification_sent: boolean | null
          payment_method: string | null
          phone: string | null
          rental_end_date: string
          rental_start_date: string
          representative_name: string
          representative_position: string | null
          reviewed_by: string | null
          service_fee: number | null
          status_id: number | null
          submitted_at: string
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          company_address?: string | null
          company_name: string
          distribution_type: string
          email?: string | null
          id?: number
          movie_title: string
          notification_sent?: boolean | null
          payment_method?: string | null
          phone?: string | null
          rental_end_date: string
          rental_start_date: string
          representative_name: string
          representative_position?: string | null
          reviewed_by?: string | null
          service_fee?: number | null
          status_id?: number | null
          submitted_at?: string
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          company_address?: string | null
          company_name?: string
          distribution_type?: string
          email?: string | null
          id?: number
          movie_title?: string
          notification_sent?: boolean | null
          payment_method?: string | null
          phone?: string | null
          rental_end_date?: string
          rental_start_date?: string
          representative_name?: string
          representative_position?: string | null
          reviewed_by?: string | null
          service_fee?: number | null
          status_id?: number | null
          submitted_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contracts_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "admin_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "contract_status"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
