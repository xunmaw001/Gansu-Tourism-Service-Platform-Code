package com.entity.view;

import org.apache.tools.ant.util.DateUtils;
import com.annotation.ColumnInfo;
import com.entity.JingdianEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import com.utils.DateUtil;

/**
* 景点
* 后端返回视图实体辅助类
* （通常后端关联的表或者自定义的字段需要返回使用）
*/
@TableName("jingdian")
public class JingdianView extends JingdianEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	//当前表
	/**
	* 景点类型的值
	*/
	@ColumnInfo(comment="景点类型的字典表值",type="varchar(200)")
	private String jingdianValue;
	/**
	* 是否上架的值
	*/
	@ColumnInfo(comment="是否上架的字典表值",type="varchar(200)")
	private String shangxiaValue;

	//级联表 商家
		/**
		* 商家名称
		*/

		@ColumnInfo(comment="商家名称",type="varchar(200)")
		private String shangjiaName;
		/**
		* 联系方式
		*/

		@ColumnInfo(comment="联系方式",type="varchar(200)")
		private String shangjiaPhone;
		/**
		* 邮箱
		*/

		@ColumnInfo(comment="邮箱",type="varchar(200)")
		private String shangjiaEmail;
		/**
		* 营业执照展示
		*/

		@ColumnInfo(comment="营业执照展示",type="varchar(200)")
		private String shangjiaPhoto;
		/**
		* 商家信用类型
		*/
		@ColumnInfo(comment="商家信用类型",type="int(11)")
		private Integer shangjiaXingjiTypes;
			/**
			* 商家信用类型的值
			*/
			@ColumnInfo(comment="商家信用类型的字典表值",type="varchar(200)")
			private String shangjiaXingjiValue;
		/**
		* 现有余额
		*/
		@ColumnInfo(comment="现有余额",type="decimal(10,2)")
		private Double newMoney;
		/**
		* 商家介绍
		*/

		@ColumnInfo(comment="商家介绍",type="longtext")
		private String shangjiaContent;
		/**
		* 逻辑删除
		*/

		@ColumnInfo(comment="逻辑删除",type="int(11)")
		private Integer shangjiaDelete;
		/**
		* 账户状态
		*/
		@ColumnInfo(comment="账户状态",type="int(11)")
		private Integer jinyongTypes;
			/**
			* 账户状态的值
			*/
			@ColumnInfo(comment="账户状态的字典表值",type="varchar(200)")
			private String jinyongValue;



	public JingdianView() {

	}

	public JingdianView(JingdianEntity jingdianEntity) {
		try {
			BeanUtils.copyProperties(this, jingdianEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



	//当前表的
	/**
	* 获取： 景点类型的值
	*/
	public String getJingdianValue() {
		return jingdianValue;
	}
	/**
	* 设置： 景点类型的值
	*/
	public void setJingdianValue(String jingdianValue) {
		this.jingdianValue = jingdianValue;
	}
	//当前表的
	/**
	* 获取： 是否上架的值
	*/
	public String getShangxiaValue() {
		return shangxiaValue;
	}
	/**
	* 设置： 是否上架的值
	*/
	public void setShangxiaValue(String shangxiaValue) {
		this.shangxiaValue = shangxiaValue;
	}


	//级联表的get和set 商家

		/**
		* 获取： 商家名称
		*/
		public String getShangjiaName() {
			return shangjiaName;
		}
		/**
		* 设置： 商家名称
		*/
		public void setShangjiaName(String shangjiaName) {
			this.shangjiaName = shangjiaName;
		}

		/**
		* 获取： 联系方式
		*/
		public String getShangjiaPhone() {
			return shangjiaPhone;
		}
		/**
		* 设置： 联系方式
		*/
		public void setShangjiaPhone(String shangjiaPhone) {
			this.shangjiaPhone = shangjiaPhone;
		}

		/**
		* 获取： 邮箱
		*/
		public String getShangjiaEmail() {
			return shangjiaEmail;
		}
		/**
		* 设置： 邮箱
		*/
		public void setShangjiaEmail(String shangjiaEmail) {
			this.shangjiaEmail = shangjiaEmail;
		}

		/**
		* 获取： 营业执照展示
		*/
		public String getShangjiaPhoto() {
			return shangjiaPhoto;
		}
		/**
		* 设置： 营业执照展示
		*/
		public void setShangjiaPhoto(String shangjiaPhoto) {
			this.shangjiaPhoto = shangjiaPhoto;
		}
		/**
		* 获取： 商家信用类型
		*/
		public Integer getShangjiaXingjiTypes() {
			return shangjiaXingjiTypes;
		}
		/**
		* 设置： 商家信用类型
		*/
		public void setShangjiaXingjiTypes(Integer shangjiaXingjiTypes) {
			this.shangjiaXingjiTypes = shangjiaXingjiTypes;
		}


			/**
			* 获取： 商家信用类型的值
			*/
			public String getShangjiaXingjiValue() {
				return shangjiaXingjiValue;
			}
			/**
			* 设置： 商家信用类型的值
			*/
			public void setShangjiaXingjiValue(String shangjiaXingjiValue) {
				this.shangjiaXingjiValue = shangjiaXingjiValue;
			}

		/**
		* 获取： 现有余额
		*/
		public Double getNewMoney() {
			return newMoney;
		}
		/**
		* 设置： 现有余额
		*/
		public void setNewMoney(Double newMoney) {
			this.newMoney = newMoney;
		}

		/**
		* 获取： 商家介绍
		*/
		public String getShangjiaContent() {
			return shangjiaContent;
		}
		/**
		* 设置： 商家介绍
		*/
		public void setShangjiaContent(String shangjiaContent) {
			this.shangjiaContent = shangjiaContent;
		}

		/**
		* 获取： 逻辑删除
		*/
		public Integer getShangjiaDelete() {
			return shangjiaDelete;
		}
		/**
		* 设置： 逻辑删除
		*/
		public void setShangjiaDelete(Integer shangjiaDelete) {
			this.shangjiaDelete = shangjiaDelete;
		}
		/**
		* 获取： 账户状态
		*/
		public Integer getJinyongTypes() {
			return jinyongTypes;
		}
		/**
		* 设置： 账户状态
		*/
		public void setJinyongTypes(Integer jinyongTypes) {
			this.jinyongTypes = jinyongTypes;
		}


			/**
			* 获取： 账户状态的值
			*/
			public String getJinyongValue() {
				return jinyongValue;
			}
			/**
			* 设置： 账户状态的值
			*/
			public void setJinyongValue(String jinyongValue) {
				this.jinyongValue = jinyongValue;
			}


	@Override
	public String toString() {
		return "JingdianView{" +
			", jingdianValue=" + jingdianValue +
			", shangxiaValue=" + shangxiaValue +
			", shangjiaName=" + shangjiaName +
			", shangjiaPhone=" + shangjiaPhone +
			", shangjiaEmail=" + shangjiaEmail +
			", shangjiaPhoto=" + shangjiaPhoto +
			", newMoney=" + newMoney +
			", shangjiaContent=" + shangjiaContent +
			", shangjiaDelete=" + shangjiaDelete +
			"} " + super.toString();
	}
}